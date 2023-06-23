import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { openCamera, openGallery } from '../../shared/utilities/export'
import { HP, Options, WP, colors, size } from '../../shared/exporter'
import { ImagePickerModal } from '../Modal/ImagePickerModal'
import { Icons } from '../../assets/icons'




const FileUpload = (props) => {

   const { mainStyle, titleStyle, boxStyle, getData, imageStyle } = props
   const [show, setShow] = useState(false)
   const [img, setImg] = useState(null)



   async function showGallery() {
      const res = await openGallery(Options, setShow)
      setImg(res)
      getData(res)
   }

   async function showCamera() {
      const res = await openCamera(Options, setShow)
      setImg(res)
      getData(res)
   }

   async function stateChange() {
      setShow(true)
   }


   return (
      <View style={[styles.container, { ...mainStyle }]}>
         <Text style={[styles.headingStyle, { ...titleStyle }]}>FileUpload</Text>
         <TouchableOpacity style={[styles.box, { ...boxStyle }]} onPress={stateChange}>

            {img ?
               <Image
                  source={{ uri: img?.uri }}
                  style={[styles.imgStyle, { ...imageStyle }]}
                  resizeMode="cover"
               />

               : Icons.fillPlus}

         </TouchableOpacity>
         <ImagePickerModal
            show={show}
            onPressHide={() => setShow(false)}
            onPressGallery={showGallery}
            onPressCamera={showCamera}
         />
      </View>
   )
}

export default FileUpload


const styles = StyleSheet.create({

   container: {
      marginTop: HP(1.5),
      marginHorizontal: WP(6)
   },
   headingStyle: {
      color: colors.b1,
      fontWeight: 400,
      lineHeight: HP(3),
      fontSize: size.normal
   },
   box: {
      borderColor: colors.P3,
      borderWidth: 1,
      height: HP(14),
      marginTop: HP(1.5),
      borderStyle: 'dashed',
      borderRadius: WP(5),
      backgroundColor: '#E1E7EA',
      justifyContent: 'center',
      alignItems: 'center'
   },
   imgStyle: {
      width: '99%',
      height: '99%',
      borderRadius: WP(5)
   }
})