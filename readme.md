# react-native-quick-style

```bash
npm install --save react-native-quick-style
```

Combines most prefered styles and enables you to select from list

![image](react-native-quick-style/example.png)


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