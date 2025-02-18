import * as React from 'react';
import { Props as SelectProps } from 'react-select';
interface WindowedSelectProps extends SelectProps {
    windowThreshold: number;
}
declare const _default: React.ForwardRefExoticComponent<Pick<WindowedSelectProps, string | number> & React.RefAttributes<unknown>>;
export default _default;
