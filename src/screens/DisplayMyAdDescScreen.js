import React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import Header from '../components/Header';


export default function DisplayMyAdDescScreen({route, navigation}) {
  const item =  route.params;

//   const handleDelete = (postId) => {
//     Alert.alert(
//       'Delete post',
//       'Are you sure?',
//       [
//         {
//           text: 'Cancel',
//           onPress: () => console.log('Cancel Pressed!'),
//           style: 'cancel',
//         },
//         {
//           text: 'Confirm',
//           onPress: () => deletePost(postId),
//         },
//       ],
//       {cancelable: false},
//     );
//   };

//   const deletePost = (postId) => {
//     firestore()
//       .collection('posts')
//       .doc(postId)
//       .get()
//       .then((documentSnapshot) => {
//         if (documentSnapshot.exists) {
//           const {postImg} = documentSnapshot.data();

//           if (postImg != null) {
//             const storageRef = storage().refFromURL(postImg);
//             const imageRef = storage().ref(storageRef.fullPath);

//             imageRef
//               .delete()
//               .then(() => {
//                 deleteFirestoreData(postId);
//               })
//               .catch((e) => {
//                 console.log('Error while deleting the image. ', e);
//               });
//             // If the post image is not available
//           } else {
//             deleteFirestoreData(postId);
//           }
//         }
//       });
//   };

//   const deleteFirestoreData = (postId) => {
//     firestore()
//       .collection('posts')
//       .doc(postId)
//       .delete()
//       .then(() => {
//         Alert.alert(
//           'Post deleted!',
//           'Your post has been deleted successfully!',
//         );
//         setDeleted(true);
//       })
//       .catch((e) => console.log('Error deleting post.', e));
//   };

  return (
    <View style={{flex:1}}>
    <Header title="MyProductDescription" type={'arrow-left'} navigation={navigation}/>
    <View style={{flex: 1, padding:25, paddingBottom:0 ,paddingTop:10 , backgroundColor: '#e5e5e5'}}>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 30,
        }}>
        <Image
          style={{width: "90%", height: 250, borderRadius: 20}}
          source={{uri: item.postImg}} />
      </View>

      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 28,
          marginTop: 10,
          color: '#2c2c2c',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 22,
          marginTop: 10,
          color: '#2c2c2c',
        }}>
        PKR {item.price}
      </Text>
      <Text
        style={{
          fontSize: 18,
          marginTop: 10,
          color: '#2c2c2c',
          marginBottom: 20,
        }}>
        {item.discription}
      </Text>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 15,
        }}>
        {/* <TouchableOpacity
            onPress={() => handleDelete(item.id)}
          style={{
            height: 50,
            width: 150,
            marginRight: 5,
            borderRadius: 10,
            backgroundColor: '#00cc66',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: "row"
          }}>
          <Text style={{color: 'white', fontSize: 18, marginRight: 5}}>
                <Icon name="delete" size={25} color="white" />
          </Text>
          <Text style={{color: 'white', fontSize: 18, }}>
            Delete Ad
          </Text>
        </TouchableOpacity> */}
      </View>
    </View>
    </View>
  );
}
