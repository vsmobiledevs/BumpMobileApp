import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { AppButton, MyDataDropdown, MyDataInput } from '../../../components';
import { Icons } from '../../../assets/icons';
import { HP, WP, colors } from '../../../shared/exporter';
import { myDataFields, myDataVS } from '../../../shared/utilities/validations';

export default function MyData() {
  const formikRef = useRef(null);
  const [isEdit, setIsEdit] = useState(true);

  const [gender] = useState('Female');
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  const [country] = useState('Australia ');
  const [countryDropDown, setCountryDropDown] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const [city] = useState('Sydney ');
  const [cityDropDown, setCityDropDown] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  const [degree] = useState('BSCS ');
  const [degreeDropDown, setDegreeDropDown] = useState(false);
  const [selectedDegree, setSelectedDegree] = useState(null);

  const [profession] = useState('Software Engineer ');
  const [professionDropDown, setProfessionDropDown] = useState(false);
  const [selectedProfession, setSelectedProfession] = useState(null);

  const [status] = useState('Married ');
  const [statusDropDown, setStatusDropDown] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState(null);

  const [smoking] = useState('No ');
  const [smokingDropDown, setSmokingDropDown] = useState(false);
  const [smoker, setSmoker] = useState(null);

  const onPresEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleForm = (values) => {
    console.log(values);
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
                  open={open}
                  value={value}
                  items={values.gender}
                  setOpen={setOpen}
                  setValue={setValue}
                  setItems={handleChange('gender')}
                  placeholder="Select gender"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={gender} label="Gender" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  open={countryDropDown}
                  value={selectedCountry}
                  items={values.countries}
                  setOpen={setCountryDropDown}
                  setValue={setSelectedCountry}
                  setItems={handleChange('countries')}
                  placeholder="Select country"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={country} label="Country" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  open={cityDropDown}
                  value={selectedCity}
                  items={values.cities}
                  setOpen={setCityDropDown}
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
                  open={degreeDropDown}
                  value={selectedDegree}
                  items={values.cities}
                  setOpen={setDegreeDropDown}
                  setValue={setSelectedDegree}
                  setItems={handleChange('degrees')}
                  placeholder="Select city"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={degree} label="Education" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  open={professionDropDown}
                  value={selectedProfession}
                  items={values.profession}
                  setOpen={setProfessionDropDown}
                  setValue={setSelectedProfession}
                  setItems={handleChange('profession')}
                  placeholder="Select profession"
                  dropDownDirection="TOP"
                />
              ) : (
                <MyDataInput value={profession} label="Profession" isEdit={isEdit} />
              )}

              {!isEdit ? (
                <MyDataDropdown
                  open={statusDropDown}
                  value={selectedStatus}
                  items={values.status}
                  setOpen={setStatusDropDown}
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
                  open={smokingDropDown}
                  value={smoker}
                  items={values.smoking}
                  setOpen={setSmokingDropDown}
                  setValue={setSmoker}
                  setItems={handleChange('smoking')}
                  placeholder="Select status"
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
                value={values.experience}
                setValue={handleChange('experience')}
                label="Experience"
                isEdit={isEdit}
              />

              <MyDataInput
                value={values.weight}
                setValue={handleChange('weight')}
                label="Weight"
                isEdit={isEdit}
              />

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
});
