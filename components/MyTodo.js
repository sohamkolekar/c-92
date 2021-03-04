import React from 'react'
import {StyleSheet,View,Text,TouchableOpacity} from 'react-native'

export default class MyCalendar extends React.Component{
    constructor(){
        super()
        this.state={
         
        }
    }
    
    loop=(Button)=>{
        var r=Math.ceil(Button/7)
        var loopResult=[]
        var y=0;
            loopResult.push(
                <View>
            <View style={{ flexDirection:'row',marginStart:150 }}>
                {this.renderButton(Button)[0]}
            </View>
            <View style={{flexDirection:'row' }}>
                {this.renderButton(Button)[1]}
            </View>
            <View style={{flexDirection:'row' }}>
            {this.renderButton(Button)[2]}
            </View>
             <View style={{flexDirection:'row' }}>
             {this.renderButton(Button)[3]}
             </View>
             <View style={{flexDirection:'row' }}>
             {this.renderButton(Button)[4]}
             </View>
             <View style={{flexDirection:'row' }}>
             {this.renderButton(Button)[5]}
             </View>
             
</View>
            )
        
        return loopResult
    }
    
    renderButton=(NoOfButton)=>{
        
        var button=[[],[],[],[],[],[],[],[],[]]
         var r=Math.ceil(NoOfButton/7)
         //[0,1,8,15,22,29,31] [0,4,11,18,25,31]
         var matrix=[0,4,11,18,25,31]
       
         for(let k=0;k<r+1;k++){
             start=matrix[k]
             x=x+1*k
             for(let i=start;i<matrix[k+1];i++){
                   
                 button[k].push(
                    
                     <View style={{marginTop:x}} key={i+1}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>{
                                console.log(i+1)
                                
                            }}
                            >
                                <Text
                                style={{fontSize:20,padding:10}}>
                                    {i+1}
                                </Text>
                        </TouchableOpacity>
                     </View>
                   
                    
                 )
                 
             }
        }   
            
           
        return button
     }
     renderRemainderButton=(NoOfButton)=>{

        var r=Math.ceil(NoOfButton/7)
        const remainder=NoOfButton%7
       var remainderArray=[]
       var remainderButton=[[],[],[],[]]
       var o      
        for(var h=(r-1)*7+1;h<=NoOfButton;h++){
        remainderArray.push(h)
       }
     const remainderHeight=30
        for(let g=0;g<remainder;g++){
            
            remainderButton.push(
                <View style={{marginTop:remainderHeight}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={()=>{
                                console.log(remainderArray[g])
                        }}>
                          <Text
                            style={{fontSize:20,padding:10}}>
                                {remainderArray[g]}
                            </Text>
                    </TouchableOpacity>
                </View>
            )

        }
        return remainderButton
     }
    render(){
        return(
           
                
            <View style={styles.container}>
              
                {console.log(x)}
              
               {this.loop(31)}
             
               
                
               
               
            </View>
        )
    }
}

var x=20,start=1
/*<View style={{flexDirection:'row' }}>
             {this.renderRemainderButton(Button)}
             </View>*/
const styles=StyleSheet.create({
    button:{
        backgroundColor:'yellow',
        width:50,
        height:50,
        borderWidth:1,
        marginStart:0
     
        
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignSelf:'center',
        flexDirection:'row',
        marginTop:20,   
       
        
        
        
    },
    box:{
          
    },
    mainContainer:{
        
        
    }

})