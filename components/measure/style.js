import {StyleSheet} from "react-native"

export const styles = StyleSheet.create({

    container: {
            flex: 1            
    },

    pickerView : {flexDirection:"row", 
                  alignItems:"center", 
                  flex :1},

   textInputView : {height:40,
                    borderColor:"#12340d", 
                    color:"#12340d",
                    borderBottomWidth:1,
                    fontSize:30,
                    textAlign:"center"},

    picker : {marginRight:20, 
        marginLeft:20, 
        flex: 1}

    
})