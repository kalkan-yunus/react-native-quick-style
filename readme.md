# react-native-quick-style

```bash
npm install --save react-native-quick-style
```

Combines most prefered styles and enables you to select from list

![image](https://github.com/kalkan-yunus/react-native-quick-style/blob/main/example.png?raw=true)


# example
```jsx
import {QuickViewStyle,QuickTextStyle} from 'react-native-quick-style';

const App = () => {
    return(
        <View style={QuickViewStyle(["center","fill"])}>
            <Text style={QuickTextStyle(["fontSize-15","bold"])}>
                    {"some text"}
            </Text>
        </View>
)
}
```