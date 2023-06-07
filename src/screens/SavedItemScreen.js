import { View, Text, TouchableOpacity, FlatList, Image ,Alert} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import storage from '@react-native-firebase/storage';
import Header from '../components/Header';
import firestore from '@react-native-firebase/firestore';
import { AuthContext } from '../navigation/authProvider';
import moment from 'moment';

export default function HomeScreen({navigation}) {
      const {user} = useContext(AuthContext);

      const [posts, setPosts] = useState(null);
      const [loading, setLoading] = useState(true);
      const [deleted, setDeleted] = useState(false);
  

      useEffect(() => {
        fetchPosts();
        setLoading(true);
      }, [loading]);
      useEffect(() => {
        fetchPosts();
        setDeleted(false);
      }, [deleted]);

      const fetchPosts = async () => {
          try {
            const list = [];
  
            await firestore()
              .collection('saved')
              .orderBy('postTime', 'desc')
              .get()
              .then((querySnapshot) => {
  
  
                querySnapshot.forEach(doc =>{
                        const {userId, title, postImg,category, price, discription, postTime} = doc.data();
                        // eslint-disable-next-line eqeqeq
                        user.uid == userId
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
        const handleDelete = (postId) => {
          Alert.alert(
            'Delete post',
            'Are you sure?',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed!'),
                style: 'cancel',
              },
              {
                text: 'Confirm',
                onPress: () => deletePost(postId),
              },
            ],
            {cancelable: false},
          );
        };
  
        const deletePost = (postId) => {
          
                
                      deleteFirestoreData(postId);
             
             
        };
  
        const deleteFirestoreData = (postId) => {
          firestore()
            .collection('saved')
            .doc(postId)
            .delete()
            .then(() => {
              Alert.alert(
                'Post deleted!',
                'Your post has been deleted successfully!',
              );
              setDeleted(true);
            })
            .catch((e) => console.log('Error deleting posst.', e));
        };

  return (
    <View style={{flex:1}}>
    <Header title="SignUp" type={'arrow-left'} navigation={navigation}/>
      <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
            <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c"}}>Saved Items</Text>
        </View>

        <FlatList
            // data={products}
            data ={posts}
            renderItem={({item}) => (
                <TouchableOpacity style={{height: 90, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 10, borderRadius: 10}}>
                <View style={{flex: 0.3}}>
                    <Image style={{height: 70, width: 70, marginLeft: 10, borderRadius: 5}} source={{uri: item.postImg}} />
                </View>
                <View style={{flex: 0.55}}>
                    <Text style={{color: 'black', fontSize: 17, fontWeight: 'bold', marginBottom: 5}}>{item.title}</Text>
                    <Text style={{color: 'black', fontSize: 14}}>PKR {item.price}</Text>
                    <Text style={{color: 'black', fontSize: 10}}>{moment(item.postTime.toDate()).fromNow()}</Text>
                </View>
                <View style={{flex: 0.15}}>
                    <TouchableOpacity
                    onPress={() => handleDelete(item.id)}
                    ><Text><Icon name="delete" size={25} color="#676767" /></Text></TouchableOpacity>
                </View>
            </TouchableOpacity>
            )}
            keyExtractor={item => item.id}

             />

    </View>
    </View>
  );
}