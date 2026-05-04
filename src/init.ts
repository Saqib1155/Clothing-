
// Safeguard against some libraries attempting to overwrite fetch
if (typeof window !== 'undefined') {
  console.log('RTK/Vite Init: Checking fetch protection...');
  
  const protectFetch = (obj: any, name: string) => {
    try {
      const descriptor = Object.getOwnPropertyDescriptor(obj, 'fetch');
      if (descriptor) {
        if (!descriptor.configurable) {
          console.warn(`Native fetch on ${name} is NOT configurable. Cannot add setter.`);
          return;
        }
        if (!descriptor.set && (descriptor.get || !descriptor.writable)) {
          const originalFetch = obj.fetch;
          Object.defineProperty(obj, 'fetch', {
            get() { return originalFetch; },
            set(v) { 
              console.warn(`Blocking attempt to overwrite fetch on ${name}`);
            },
            configurable: true,
            enumerable: true
          });
          console.log(`Successfully added setter to fetch on ${name}`);
        }
      }
    } catch (e) {
      console.error(`Error protecting fetch on ${name}:`, e);
    }
  };

  protectFetch(window, 'window');
  protectFetch(Object.getPrototypeOf(window), 'Window.prototype');
  if (typeof globalThis !== 'undefined') {
    protectFetch(globalThis, 'globalThis');
  }

  // Provide a safe 'global' and 'globalThis' proxy if needed
  const safeGlobal = new Proxy(window, {
    get(target, prop) {
      if (prop === 'global' || prop === 'globalThis') return safeGlobal;
      const value = (target as any)[prop];
      if (typeof value === 'function' && /^[A-Z]/.test(String(prop)) === false) {
        // Only bind non-constructors to target
        try {
           return value.bind(target);
        } catch(e) {
           return value;
        }
      }
      return value;
    },
    set(target, prop, value) {
      if (prop === 'fetch') {
        console.warn('Blocking attempt to set global.fetch');
        return true;
      }
      try {
        (target as any)[prop] = value;
      } catch (e) {
        console.warn(`Could not set global.${String(prop)}`, e);
      }
      return true;
    }
  });

  if (!(window as any).global) {
    (window as any).global = safeGlobal;
  }
  
  try {
    const gtDescriptor = Object.getOwnPropertyDescriptor(window, 'globalThis');
    if (gtDescriptor && gtDescriptor.configurable) {
      Object.defineProperty(window, 'globalThis', {
        get() { return safeGlobal; },
        configurable: true,
        enumerable: true
      });
    }
  } catch (e) {
    // ignore
  }
}
