/* eslint-disable prettier/prettier */
import React, {useContext, useEffect, useState} from 'react';
import { Text, View,Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import Header from '../components/Header';
import { AuthContext } from '../navigation/authProvider';
import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';



export default function HomeScreen({navigation}) {
    const {user} = useContext(AuthContext);

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

    const categories = [
        {
            name: "Mobiles & Accessories",
            img: "https://media.istockphoto.com/id/1257716991/photo/smartphone-mockup-with-blank-white-screen-on-a-yellow-background.jpg?s=612x612&w=0&k=20&c=iEOB9U_jqdfBJijEQpRZSepftlu59LJ7iHHgppFufUw=",
            sub: ["Mobile Phones", "Tablets", "Smart Watches", "Mobiles Accessories"]
        },
        {
            name: "Computers & Laptops",
            img: "https://media.wired.com/photos/5faed077f9e76246dde3355d/master/pass/Gear-Surface-Laptop-Go-SOURCE-Microsoft.jpg",
            sub: ["Computers", "Laptops", "Accessories"]
        },
        {
            name: "Automobiles",
            img: "https://media.istockphoto.com/id/1166422340/vector/modern-abstract-suv-red-car-parking-isolated.jpg?s=612x612&w=0&k=20&c=r3kouO2ia86zuN8d7KOoiUC-9n8Ur4JGfqEFDCfLGBY=",
            sub: ["Cars", "Bikes", "Car Accessories", "Bike Accessories"]
        },
        {
          name: "Electronics & Home Appliances",
          img: "https://static.india.com/wp-content/uploads/2022/09/Collage-Maker-11-Sep-2022-03.11-PM.jpg",
          sub: ["AC & Coolers", "Kitchen Appliances", "Fridges & Freezers", "TV, Monitor & Speakers", "Washing Machine & Dryers", "Other Home Appliances"]

        },
        {
          name: "Sports",
          img: "https://thumbs.dreamstime.com/b/sports-equipment-green-background-sports-accessories-sticks-balls-green-background-sport-game-symbols-equipment-gear-140034433.jpg",
          sub: ["Gym & Fitness", "Sports Equipment"]
        },
        
        {
          name: "Furniture",
          img: "https://img.freepik.com/premium-photo/modern-living-room-interior-with-sofa-green-plants-lamp-table-dark-wall-background_41470-1528.jpg",
          sub: ["Sofa & Chairs", "Beds & Wardrobes", "Tables & Dining", "Home Decoration", "Garden & Outdoor"],
        }
      ]
    
      // const products = [
      //   {
      //     name: "Infinix Note 7",
      //     img: "https://phonedady.com/uploads/model_images/mob_infinix_note_7.webp",
      //     price: 12000
      //   },
      //   {
      //     name: "Infinix Note 7",
      //     img: "https://phonedady.com/uploads/model_images/mob_infinix_note_7.webp",
      //     price: 12000
      //   },
      //   {
      //     name: "Infinix Note 7",
      //     img: "https://phonedady.com/uploads/model_images/mob_infinix_note_7.webp",
      //     price: 12000
      //   },
      //   {
      //     name: "Infinix Note 7",
      //     img: "https://phonedady.com/uploads/model_images/mob_infinix_note_7.webp",
      //     price: 12000
      //   },
      //   {
      //     name: "Infinix Note 7",
      //     img: "https://phonedady.com/uploads/model_images/mob_infinix_note_7.webp",
      //     price: 12000
      //   },
      //   {
      //     name: "Infinix Note 7",
      //     img: "https://phonedady.com/uploads/model_images/mob_infinix_note_7.webp",
      //     price: 12000
      //   }
      // ]


  return (
    <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, marginBottom: 5}}>
            <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 32, marginTop: 15, color: "#2c2c2c"}}>Explore</Text>
        </View>
        
        <TouchableOpacity
          onPress={()=>{navigation.navigate('SearchProductScreen')}}
          style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 45, width: '100%', borderRadius: 10, backgroundColor: 'white',marginTop: 5, marginBottom: 15}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', padding: 10}}>
              <Text style={{flex:0.85, color: '#676767', fontSize: 18}}>Search</Text>
              <Text style={{flex:0.15, flexDirection: 'row', justifyContent: 'center', textAlign: 'center'}}> <Icon name="search" size={25} color="#676767" /></Text>
            </View>
        </TouchableOpacity>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10}}>
            <View>
                <Text style={{fontWeight: "bold", fontSize: 20, color: "#2c2c2c"}}>Browse Categories</Text>
            </View>
            <TouchableOpacity 
                onPress={()=>{navigation.navigate('CategoryScreen', categories)}}
                style={{paddingRight:10}}
                >
                <Text style={{fontWeight: "bold", fontSize: 14, color: "#2c2c2c"}}>See All</Text>
            </TouchableOpacity>
        </View>

        <FlatList
        horizontal={true}
        data={categories}
        renderItem={({item}) => (
          <TouchableOpacity 
                onPress={()=>{navigation.navigate('SubCatScreen', item)}}
            //   onPress={()=>{navigation.navigate('DisplayAdsScreen')}}
              style={{display: "flex", alignItems: 'center', height: 90, width: 90, marginRight:5, marginBottom: 130}}>
                  <View>
                      <Image style={{width: 80, height: 80, borderRadius: 40}} source={{uri: item.img}}/>
                  </View>
                  <View>
                      <Text style={{fontSize: 10, fontWeight: 'bold', color: "#2c2c2c", marginTop: 3, textAlign: 'center'}}>{item.name}</Text>
                  </View>
          </TouchableOpacity>
        )}
        />

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 5}}>
            <Text style={{fontWeight: "bold", fontSize: 20, color: "#2c2c2c"}}>Suggested Products</Text>
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

        {/* <FlatList
            data={products}
            renderItem={({item}) => (
                <TouchableOpacity
                onPress={()=>{navigation.navigate('DisplayAdsDiscScreen', item);}}
                style={{height: 90, display:'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginTop: 5, borderRadius: 10}}>
                <View>
                    <Image style={{height: 80, width: 80, marginLeft: 5, marginRight: 10, borderRadius: 5}} source={{uri: item.img}}></Image>
                </View>
                <View>
                    <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>{item.name}</Text>
                    <Text style={{color: 'black', fontSize: 14}}>PKR {item.price}</Text>
                </View>
                </TouchableOpacity>
            )}
            /> */}


        {/* <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15}}>
            <TouchableOpacity 
            onPress={()=>{navigation.navigate('DisplayAdsScreen')}}
            style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://images.mid-day.com/images/images/2021/jul/HOME-APPLI_d.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Electronics</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://www.wickhammotorcycles.com/wp-content/uploads/2015/08/feat3.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Automobiles</Text>
                </View>
            </TouchableOpacity>
        </View> */}
{/* 
        <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%", marginBottom: 15}}>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://thumbs.dreamstime.com/b/assorted-sports-equipment-black-11961711.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Sports</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://images.unsplash.com/photo-1559723944-6913027cf19a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGV0JTIwYW5kJTIwcGhvbmV8ZW58MHx8MHx8&w=1000&q=80"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Mobiles & Tablets</Text>
                </View>
            </TouchableOpacity>
        </View> */}

        {/* <View style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: 10, width: "100%"}}>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginRight: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://thumbs.dreamstime.com/b/desktop-pc-laptop-computer-wide-monitor-keyboard-mouse-app-icons-blue-screen-d-rendered-image-45985589.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Computer & Laptops</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
              onPress={()=>{navigation.navigate('DisplayAdsScreen');}}
              style={{flex:0.5, padding:5, display: "flex", justifyContent: "center", alignItems: "center", marginLeft: 5, backgroundColor: "white", borderRadius: 10}}>
                <View>
                    <Image style={{width: 140, height: 110, borderRadius: 10}} source={{uri:"https://c0.wallpaperflare.com/preview/214/188/1021/indoor-living-room-interior-home.jpg"}}/>
                </View>
                <View>
                    <Text style={{fontWeight: "bold", fontSize: 15, color: "#2c2c2c", marginTop: 8}}>Furniture</Text>
                </View>
            </TouchableOpacity>
        </View> */}

    </View>
  );
}