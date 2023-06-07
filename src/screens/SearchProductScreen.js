/* eslint-disable prettier/prettier */
import React, {useContext, useState, useEffect, useRef} from 'react';
import { Text, View,Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from '../components/Header';
import { AuthContext } from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';


export default function SearchProductScreen({navigation}) {
    const {user} = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const searchRef = useRef();

    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosts = async () => {
        try {
          const list = [];

          await firestore()
            .collection('posts')
            .orderBy('postTime', 'desc')
            .get()
            .then((querySnapshot) => {


              querySnapshot.forEach(doc =>{
                      const {userId, title, postImg,category, price, discription, postTime} = doc.data();
                      // eslint-disable-next-line eqeqeq
                      user.uid != userId
                      ?
                      list.push({
                          id : doc.id,
                          userId,
                          title,
                          postImg,
                          category,
                          price,
                          discription,
                          postTime,
                  })
                  :
                  null;
                  });
              });
          setPosts(list);
          if (loading) {
            setLoading(false);
          }

        } catch (e) {
          console.log(e);
        }
      };
      useEffect(() => {
        fetchPosts();
        setLoading(true);
      }, [loading]);

      const onSearch = (text) => {
        let tempList = data.filter(item=> {
          return item.title.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
        setData(tempList);
      }


  return (
    <View style={{flex:1}}>
        <Header title="SignUp" type={'arrow-left'} navigation={navigation}/>
        <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>

            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, marginBottom: 10}}>
                <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c"}}>Search Product</Text>
            </View>

            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white',marginTop: 5, marginBottom: 15}}>
              <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="search" size={25} color="#676767" /></Text>

                <TextInput 
                  style={{flex:0.85, color: '#676767', fontSize: 18}} placeholder="Search" placeholderTextColor="#676767" 
                  ref={searchRef}
                  value={search}
                  onChangeText={txt=> {
                    onSearch(txt)
                    setSearch(txt);
                  }}
                />
            </View>

            <FlatList
                data={posts}
                renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate('DisplayAdsDiscScreen', item);}}
                    style={{height: 90, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 10, borderRadius: 10}}>
                    <View>
                        <Image style={{height: 70, width: 70, marginLeft: 10, marginRight: 10, borderRadius: 5}} source={{uri: item.postImg}}></Image>
                    </View>
                    <View>
                        <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: 5}}>{item.title}</Text>
                        <Text style={{color: 'black', fontSize: 14}}>PKR {item.price}</Text>
                        <Text style={{color: 'black', fontSize: 10}}>{moment(item.postTime.toDate()).fromNow()}</Text>
                    </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    </View>
  )
}