import React from "react";

/**
 * Returns a simple toggle value & function for toggling a value
 */
export const useToggle = (initial: boolean) => {
  const [ toggled, setToggled ] = React.useState(initial);
  const toggleValue = React.useCallback((forceToggle?) => {
    setToggled(val => forceToggle ?? !val);
  }, [ /* No dependencies (since setToggled is constant) */ ]);
  return [ toggled, toggleValue ] as const;
}
