export const  wrapFunctionWithLogging = (fn, fileName) => {
    return async function (...args) {
      try {
        console.log(`Calling function [${fileName}]->${fn.name} with arguments:`, args);
        const result = await fn(...args);
        console.log(`Result from function [${fileName}]->${fn.name}:`, result);
        return result;
      } catch (error) {
        console.error(`Error in function [${fileName}]->${fn.name}:`, error.message);
        throw error;
      }
    };

}

export const wrapFunctions = (obj, fileName)=>{
  const wrapped = {};
  for (const [key, fn] of Object.entries(obj)) {
    if (typeof fn === "function") {
      wrapped[key] = wrapFunctionWithLogging(fn, fileName);
    } else {
      wrapped[key] = fn;
    }
  }
  return wrapped;
}

export const sleep = (timeInSec) => {
  return new Promise((resolve)=> {
    resolve()
  }, timeInSec * 1000)
}