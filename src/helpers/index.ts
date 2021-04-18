import ViewStyle from '../style/ViewStyle.json'
import TextStyle from '../style/TextStyle.json'
import { ViewStyleCode, TextStyleCode } from './types'
import {
    ViewStyle as ReactNativeViewStyle,
    TextStyle as ReactNativeTextStyle
} from 'react-native'


export const QuickViewStyle = (styleCodes: ViewStyleCode[], customStyle: ReactNativeViewStyle = {}): object[] => {
    let vArr: any = styleCodes.map(sc => (ViewStyle[sc]))
    return [...vArr,customStyle]
}

export const QuickTextStyle = (styleCodes: TextStyleCode[], customStyle: ReactNativeTextStyle = {}): object[] => {
    let tArr: any[] = styleCodes.map(sc => (TextStyle[sc]))
    return [...tArr,customStyle]
}