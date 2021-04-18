import { ViewStyleCode, TextStyleCode } from './types';
import { ViewStyle as ReactNativeViewStyle, TextStyle as ReactNativeTextStyle } from 'react-native';
export declare const QuickViewStyle: (styleCodes: ViewStyleCode[], customStyle?: ReactNativeViewStyle) => object[];
export declare const QuickTextStyle: (styleCodes: TextStyleCode[], customStyle?: ReactNativeTextStyle) => object[];
