/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { Text, View, Image, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';


export default function FAQsScreen({navigation}) {
    
const [visible, setVisible] = useState(false);

const faqsArray = [
    {
        id: 1,
        question: "What does LOREM mean?",
        answer: "It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."
    },
    {
        id: 2,
        question: "What does LOREM mean?",
        answer: "It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."
    },
    {
        id: 3,
        question: "What does LOREM mean?",
        answer: "It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."
    },
    {
        id: 4,
        question: "What does LOREM mean?",
        answer: "It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."
    },
    {
        id: 5,
        question: "What does LOREM mean?",
        answer: "It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."

    },
    {
        id: 6,
        question: "What does LOREM mean?",
        answer: "It is used as a placeholder in magazine layouts, for example, in order to give an impression of the finished document. The text is intentionally unintelligible so that the viewer is not distracted by the content. The language is not real Latin and even the first word ‘Lorem’ does not exist. It is said that the lorem ipsum text has been common among typesetters since the 16th century."
    }
  ]

  return (
    <View style={{flex: 1, padding: 25, paddingTop: 20, backgroundColor: "#e5e5e5"}}>

        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 5, marginBottom: 15}}>
            <Text style={{fontFamily: 'Montserrat-ExtraBold', fontWeight: "bold", fontSize: 26, marginTop: 15, color: "#2c2c2c"}}>FAQs</Text>
        </View>

        <FlatList
            data={faqsArray}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <FAQItem item={item} />}
            // renderItem={({item}) => (
            //     <TouchableOpacity
            //         onPress={() => {setVisible(!visible)}}
            //         style={{height: 80, display:"flex", flexDirection: "row", alignItems: 'center', borderBottomColor: "black", borderBottomWidth: 0.5, borderRadius: 10}}>
            //             <View style={{flex:0.9, display: "flex"}}>
            //                 <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>{item.question}</Text>
            //             </View>
            //         <View style={{flex:0.1, display: "flex", justifyContent: "flex-end"}}>
            //                 <Text><Icon name="keyboard-arrow-down" size={20} color="#2c2c2c" /></Text>
            //         </View>
            //         {visible ? (
            //             <View>
            //                 <Text style={{color: 'black', fontSize: 12}}>{item.answer}</Text>
            //             </View>
            //         ): null}
            //     </TouchableOpacity>
            // )}
            />

    </View>
  );
}

const FAQItem = ({ item }) => {
    const [expanded, setExpanded] = useState(false);
  
    const toggleExpansion = () => {
      setExpanded(!expanded);
    };
  
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpansion} style={styles.questionContainer}>
                <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <Text style={styles.question}>{item.question}</Text>
                    <Text>
                        {
                            !expanded ? 
                                (<Icon name="keyboard-arrow-down" size={20} color="#2c2c2c" />) :
                                (<Icon name="keyboard-arrow-up" size={20} color="#2c2c2c" />)}
                    </Text>
                </View>
            </TouchableOpacity>
            {expanded && <Text style={styles.answer}>{item.answer}</Text>}
        </View>
    );
  };
  const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        padding: 14,
        marginBottom: 8,
        borderRadius: 8,
      },
      questionContainer: {
        height: 20,
        marginBottom: 8,
        justifyContent:"center",
      },
      question: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333333',
      },
      answer: {
        fontSize: 14,
        color: '#666666',
        lineHeight: 20,
      },
  });


// import React, { useState } from "react";
// import { Container, Header, Entity, Inner, Question, Text } from "./styles";

// const QuestionContext = React.createContext();
// export default function Banner({ children, ...restProps }) {
//   return (
//     <Container {...restProps}>
//       <Inner>{children}</Inner>
//     </Container>
//   );
// }
// Banner.Header = function BannerHeader({ children, ...restProps }) {
//   return <Header {...restProps}> {children}</Header>;
// };
// Banner.Entity = function BannerEntity({ children, ...restProps }) {
//   const [open, setOpen] = useState(false);
//   return (
//     <QuestionContext.Provider value={{ open, setOpen }}>
//       <Entity {...restProps}> {children}</Entity>
//     </QuestionContext.Provider>
//   );
// };
// Banner.Question = function BannerHeader({ children, ...restProps }) {
//   const { open, setOpen } = React.useContext(QuestionContext);

//   return (
//     <Question onClick={() => setOpen((open) => !open)} {...restProps}>
//       {children}
//       {open ? <h3>^</h3> : <h3>+</h3>}
//     </Question>
//   );
// };
// Banner.Text = function BannerText({ children, ...restProps }) {
//   const { open } = React.useContext(QuestionContext);

//   return open ? <Text {...restProps}>{children}</Text> : null;
// };