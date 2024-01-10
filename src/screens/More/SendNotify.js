import React, { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, ToastAndroid} from 'react-native';
import Header from '../../components/Header';
import colors from '../../utilities/colors';
import { useUserStore } from '../../constant/store';
import {api} from '../../constant/api';
import AnimatedLottieView from 'lottie-react-native';

const SendNotify = (props) => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const [user, clear] = useUserStore(s => [s.user, s.clear]);
    const [loading, setLoading] = useState(false);

    const validation = () => {
        if(title === '' || description === ''){
            alert('Please Enter Title and Description');
        } else{
            SendNotifications()
        }
    }

    const SendNotifications = async () => {
        try {
          setLoading(true);
          const res = await api.put(`/notification`, {
            notification_title: title,
            notification_desp:description,
            notification_user_id:user?.admin_id,
          });
          if (res.data.status === 'success') {
            ToastAndroid.show(res?.data?.message,ToastAndroid.SHORT)
            setLoading(false);
            console.log(res.data);
            props?.navigation.goBack();
          }
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      };
    
    return(
        <View style={{flex:1}}>
            <Header text="Send Notifications" color={colors.white} showBack />
            <View style={{
                height:55,
                width:'88%',
                alignSelf:'center',
                marginTop:40,
                borderWidth:1,
                borderColor:'#0003',
                borderRadius:10,
            }}>
                <TextInput
                style={{paddingLeft:20,color:'#000'}}
                placeholder='Title'
                placeholderTextColor={'#0006'}
                onChangeText={(title) => setTitle(title)}/>
            </View>
            <View style={{
                height:111,
                width:'88%',
                alignSelf:'center',
                marginTop:20,
                borderWidth:1,
                borderColor:'#0003',
                borderRadius:10,
            }}>
                <TextInput
                multiline
                style={{paddingLeft:20,color:'#000'}}
                placeholder='Description'
                placeholderTextColor={'#0006'}
                onChangeText={(description) => setDescription(description)}/>
            </View>
            {loading ? (
            <View 
            style={{
                height:55,
                width:'88%',
                alignSelf:'center',
                marginTop:40,
                backgroundColor:colors.primary,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <AnimatedLottieView
                style={{width: 50, height: 40}}
                source={require('../../utilities/lottie/loader.json')}
                autoPlay
                loop
                />
            </View>
            ) : (
            <TouchableOpacity 
            onPress={() => {validation()}}
            style={{
                height:55,
                width:'88%',
                alignSelf:'center',
                marginTop:40,
                backgroundColor:colors.primary,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center'
            }}>
                <Text style={{color:'#fff',fontSize:18,fontWeight:'bold'}}>Send</Text>
            </TouchableOpacity>
            )}

        </View>
    )
}

export default SendNotify;