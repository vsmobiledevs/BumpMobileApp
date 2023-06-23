import {
  Platform,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, { useRef, useState } from 'react';
import Toast from 'react-native-simple-toast';
import { Formik } from 'formik';
import { AppButton, MyDataDropdown, MyDataInput } from '../../../components';
import { Icons } from '../../../assets/icons';
import { HP, WP, colors, size } from '../../../shared/exporter';
import { myDataFields, myDataVS } from '../../../shared/utilities/validations';

export default function MyData() {
  const formikRef = useRef(null);
  const [isEdit, setIsEdit] = useState(true);

  const [gender] = useState('Female');
  const [value, setValue] = useState(null);

  const [country] = useState('Australia ');
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [city] = useState('Sydney ');
  const [selectedCity, setSelectedCity] = useState(null);

  const [degree] = useState('BSCS ');
  const [selectedDegree, setSelectedDegree] = useState(null);

  const [profession] = useState('Software Engineer ');
  const [selectedProfession, setSelectedProfession] = useState(null);

  const [status] = useState('Married ');
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [smoking] = useState('No ');
  const [smoker, setSmoker] = useState(null);

  const onPresEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleForm = (values) => {
    Toast.showWithGravity(values, Toast.SHORT, Toast.BOTTOM);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          innerRef={formikRef}
          initialValues={myDataFields}
          onSubmit={(values) => {
            handleForm(values);
          }}
          validationSchema={myDataVS}
        >
          {({ values, handleSubmit, handleChange }) => (
            <View style={!isEdit && styles.innerContainer}>
              <MyDataInput
                value={values.fullName}
                setValue={handleChange('fullName')}
                label="Full Name"
                isEdit={isEdit}
                rightIcon={Icons.editPen}
                onPressIcon={onPresEdit}
              />
              {!isEdit ? (
                <MyDataDropdown
                  value={value}
                  items={values.gender}
                  setValue={setValue}
                  setItems={handleChange('gender')}
                  placeholder="Select gender"
                  dropDownDirection="TOP"
                  zIndex={1}
                />
              ) : (
                <MyDataInput value={gender} label="Gender" isEdit={isEdit} />
              )}

              <MyDataInput
                value={values.email}
                setValue={handleChange('email')}
                label="Email"
                isEdit={isEdit}
              />

              <MyDataInput
                value={values.phone}
                setValue={handleChange('phone')}
                label="Phone"
                isEdit={isEdit}
              />

              <MyDataInput
                value={values.dob}
                setValue={handleChange('dob')}
                label="Date Of Birth"
                isEdit={isEdit}
              />

              {!isEdit ? (
                <MyDataDropdown
                  value={selectedCountry}
                  items={values.countries}
                  setValue={setSelectedCountry}
                  setItems={handleChange('countries')}
                  placeholder="Select country"
                  dropDownDirection="TOP"
                  zIndex={0}
                />
              ) : (
                <MyDataInput value={country} label="Country" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  value={selectedCity}
                  items={values.cities}
                  setValue={setSelectedCity}
                  setItems={handleChange('cities')}
                  placeholder="Select city"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={city} label="City" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  value={selectedDegree}
                  items={values.cities}
                  setValue={setSelectedDegree}
                  setItems={handleChange('degrees')}
                  placeholder="Select Degree"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={degree} label="Education" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  value={selectedProfession}
                  items={values.profession}
                  setValue={setSelectedProfession}
                  setItems={handleChange('profession')}
                  placeholder="Select profession"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={profession} label="Profession" isEdit={isEdit} />
              )}
              <MyDataInput
                value={values.experience}
                setValue={handleChange('experience')}
                label="Experience"
                isEdit={isEdit}
              />

              {!isEdit ? (
                <MyDataDropdown
                  value={selectedStatus}
                  items={values.status}
                  setValue={setSelectedStatus}
                  setItems={handleChange('status')}
                  placeholder="Select status"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={status} label="Status" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  value={smoker}
                  items={values.smoking}
                  setValue={setSmoker}
                  setItems={handleChange('smoking')}
                  placeholder="Smoking"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={smoking} label="Smoking" isEdit={isEdit} />
              )}

              <MyDataInput
                value={values.kids}
                setValue={handleChange('kids')}
                label="Kids"
                isEdit={isEdit}
              />

              <MyDataInput
                value={values.weight}
                setValue={handleChange('weight')}
                label="Weight"
                isEdit={isEdit}
              />

              {/* <Text style={styles.intrestStyle}>Interests</Text>

              <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={(item, index) => `key${index + item}`}
                renderItem={(item) => (
                  <TouchableOpacity style={styles.miniBtnStyle}>
                    {Icons.add}
                    <Text style={styles.miniBtnText}>Interests</Text>
                  </TouchableOpacity>
                )}
                numColumns={3}
              /> */}

              {!isEdit && (
                <AppButton
                  title="Save"
                  touchableOpacity={{
                    onPress: () => handleSubmit(),
                  }}
                />
              )}
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginBottom: Platform.OS === 'ios' ? HP(6) : HP(10),
  },
  innerContainer: {
    width: WP(92),
    borderColor: colors.g26,
    borderWidth: 0.2,
    marginTop: HP(3),
    borderRadius: HP(2),
    backgroundColor: colors.w1,
  },
  intrestStyle: {
    color: colors.b1,
    marginHorizontal: WP(3),
    fontSize: size.medium,
    fontWeight: 600,
  },
  miniBtnStyle: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: WP(25),
    margin: 8,
    height: HP(6.5),
    paddingHorizontal: WP(2),
    borderRadius: WP(10),
    backgroundColor: colors.white,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  miniBtnText: {
    color: colors.b1,
    fontSize: size.medium,
    alignSelf: 'center',
  },
});
