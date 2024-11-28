import { Image, View } from 'react-native'

const Logo = (props) => {
  return (
    <View
        style={{    
            width: props.toggle ? 250 : 150, 
            height: props.toggle ? 250 : 150, 
            boxShadow: '#000',
            border: '15px solid #000', 
            padding: 5,
            borderRadius: 75, 
        }}
    >
        <Image 
                source={require('../../assets/DarkModeLogo.png')}
                style={{ 
                    width: '93%',
                    height: '100%',
                }} 
        />
    </View>
    
  )
}

export default Logo