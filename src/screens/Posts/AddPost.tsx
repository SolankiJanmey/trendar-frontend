import React, { useState, useRef, useContext, useEffect } from 'react'
import { StyleSheet, View, Image, TouchableOpacity, ScrollView, Switch, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import RNFetchBlob from 'rn-fetch-blob';
import { Buffer } from 'buffer'
import * as Location from 'expo-location';
import { MultiSelect } from 'react-native-element-dropdown';
import { PaperSelect } from 'react-native-paper-select';
import DateTimePicker from '@react-native-community/datetimepicker';
// import MultiSelect from 'react-native-multiple-select';
import { Dropdown } from 'react-native-element-dropdown';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryText } from '../../components/PrimaryText';
import { PrimaryButton } from '../../components/PrimaryButton';
import { PrimaryTextInput } from '../../components/PrimaryTextInput';
import { PrimaryMultiSelect } from '../../components/PrimaryMultiSelect';
import { PrimaryRange } from '../../components/PrimaryRange';

import { CameraIcon } from '../../../assets/icons/CameraIcon';
import { ProfilesContext } from '../../context/ProfilesContext';

import { BedroomEnum, PropertyTypeEnum, PetEnum, AmenitiesEnum, AgreementEum, UtilitiesIncluded, ParkingSpotEnum, BathRoomEum } from '../../enums';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';
import axios from 'axios';
import LocalStorge from '../../services/LocalStorge';

export const AddPost = ({ navigation }: any) => {

    const profilesContext = useContext(ProfilesContext);
    const { signUpUserDetails, setSignUpUserDetails }: any = profilesContext;

    const [postTitle, setPostTitle] = useState('');
    const [postTitleError, setPostTitleError] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postDescriptionError, setPostDescriptionError] = useState('');
    const [price, setPrice]: any = useState('');
    const [priceError, setPriceError] = useState('');
    const [bedRoomData, setBedRoomData] = useState([
        { label: BedroomEnum.ONE, value: BedroomEnum.ONE },
        { label: BedroomEnum.TWO, value: BedroomEnum.TWO },
        { label: BedroomEnum.THREE, value: BedroomEnum.THREE },
        { label: BedroomEnum.FOUR, value: BedroomEnum.FOUR },
        { label: BedroomEnum.FIVE_OR_MORE, value: BedroomEnum.FIVE_OR_MORE },
    ]);
    const [selectedBedRooms, setSelectedBedRooms] = useState([]);
    const [propertyType, setPropertyType] = useState([
        { label: PropertyTypeEnum.APARTMENT, value: PropertyTypeEnum.APARTMENT },
        { label: PropertyTypeEnum.BASEMENT, value: PropertyTypeEnum.BASEMENT },
        { label: PropertyTypeEnum.CONDO, value: PropertyTypeEnum.CONDO },
        { label: PropertyTypeEnum.HOUSE, value: PropertyTypeEnum.HOUSE },
        { label: PropertyTypeEnum.PRIVATE_ROOM, value: PropertyTypeEnum.PRIVATE_ROOM },
        { label: PropertyTypeEnum.SHARED_ROOM, value: PropertyTypeEnum.SHARED_ROOM },
        { label: PropertyTypeEnum.TOWNHOUSE, value: PropertyTypeEnum.TOWNHOUSE },
    ]);
    const [selectedPropertyTypes, setSelectedPropertyTypes] = useState([]);
    const [petData, setPetData] = useState([
        { label: PetEnum.CAT, value: PetEnum.CAT },
        { label: PetEnum.DOG, value: PetEnum.DOG },
        { label: PetEnum.OTHER, value: PetEnum.OTHER },
    ]);
    const [selectedPets, setSelectedPets] = useState([]);
    const [amenitiesData, setAmenitiesData] = useState([
        { label: AmenitiesEnum.AIR_CONDITIONING, value: AmenitiesEnum.AIR_CONDITIONING },
        { label: AmenitiesEnum.ASSIGNED_PARKING, value: AmenitiesEnum.ASSIGNED_PARKING },
        { label: AmenitiesEnum.BALCONY, value: AmenitiesEnum.BALCONY },
        { label: AmenitiesEnum.BUSINESS_CENTER, value: AmenitiesEnum.BUSINESS_CENTER },
        { label: AmenitiesEnum.CARPET, value: AmenitiesEnum.CARPET },
        { label: AmenitiesEnum.CEILING_FAN, value: AmenitiesEnum.CEILING_FAN },
        { label: AmenitiesEnum.CENTRAL_HEAT, value: AmenitiesEnum.CENTRAL_HEAT },
        { label: AmenitiesEnum.CONCIERGE_SERVICE, value: AmenitiesEnum.CONCIERGE_SERVICE },
        { label: AmenitiesEnum.CONTROLLED_ACCESS, value: AmenitiesEnum.CONTROLLED_ACCESS },
        { label: AmenitiesEnum.DECK, value: AmenitiesEnum.DECK },
        { label: AmenitiesEnum.DISHWASHER, value: AmenitiesEnum.DISHWASHER },
        { label: AmenitiesEnum.DOOR_PERSON, value: AmenitiesEnum.DOOR_PERSON },
        { label: AmenitiesEnum.DRY_CLEANING_SERVICE, value: AmenitiesEnum.DRY_CLEANING_SERVICE },
        { label: AmenitiesEnum.ELEVATOR, value: AmenitiesEnum.ELEVATOR },
        { label: AmenitiesEnum.FIRE_PLACE, value: AmenitiesEnum.FIRE_PLACE },
        { label: AmenitiesEnum.FITNESS_CENTER, value: AmenitiesEnum.FITNESS_CENTER },
        { label: AmenitiesEnum.FURNISHED, value: AmenitiesEnum.FURNISHED },
        { label: AmenitiesEnum.GARAGE_PARKING, value: AmenitiesEnum.GARAGE_PARKING },
        { label: AmenitiesEnum.GARDEN, value: AmenitiesEnum.GARDEN },
        { label: AmenitiesEnum.HARDWOOD_FLOOR, value: AmenitiesEnum.HARDWOOD_FLOOR },
        { label: AmenitiesEnum.HIGH_CEILING, value: AmenitiesEnum.HIGH_CEILING },
        { label: AmenitiesEnum.IN_UNITY_LAUNDRY, value: AmenitiesEnum.IN_UNITY_LAUNDRY },
        { label: AmenitiesEnum.LEED_CERTIFIED, value: AmenitiesEnum.LEED_CERTIFIED },
        { label: AmenitiesEnum.ONSITE_MANAGEMENT, value: AmenitiesEnum.ONSITE_MANAGEMENT },
        { label: AmenitiesEnum.ON_SITE_LAUNDRY, value: AmenitiesEnum.ON_SITE_LAUNDRY },
        { label: AmenitiesEnum.ON_SITE_LAUNDRY_BUILDING, value: AmenitiesEnum.ON_SITE_LAUNDRY_BUILDING },
        { label: AmenitiesEnum.OUTDOOR_SPACE, value: AmenitiesEnum.OUTDOOR_SPACE },
        { label: AmenitiesEnum.PACKAGE_SERVICE, value: AmenitiesEnum.PACKAGE_SERVICE },
        { label: AmenitiesEnum.RESIDENTS_LOUNGE, value: AmenitiesEnum.RESIDENTS_LOUNGE },
        { label: AmenitiesEnum.ROOF_DESK, value: AmenitiesEnum.ROOF_DESK },
        { label: AmenitiesEnum.STORAGE, value: AmenitiesEnum.STORAGE },
        { label: AmenitiesEnum.SWIMMING_POOL, value: AmenitiesEnum.SWIMMING_POOL },
        { label: AmenitiesEnum.WALK_IN_CLOSET, value: AmenitiesEnum.WALK_IN_CLOSET },
        { label: AmenitiesEnum.WHEEL_CHAIR_ACCESSIBLE, value: AmenitiesEnum.WHEEL_CHAIR_ACCESSIBLE },
    ]);
    const [selectedAmenities, setSelectedAmenities] = useState([]);
    const [priceRange, setPriceRange] = useState([]);
    const [bathRoomData, setBathRoomData] = useState([
        { label: BathRoomEum.ONE, value: BathRoomEum.ONE },
        { label: BathRoomEum.ONE_POINT_FIVE, value: BathRoomEum.ONE_POINT_FIVE },
        { label: BathRoomEum.TWO, value: BathRoomEum.TWO },
        { label: BathRoomEum.TWO_POINT_FIVE, value: BathRoomEum.TWO_POINT_FIVE },
        { label: BathRoomEum.THREE, value: BathRoomEum.THREE },
        { label: BathRoomEum.THREE_POINT_FIVE, value: BathRoomEum.THREE_POINT_FIVE },
        { label: BathRoomEum.FOUR, value: BathRoomEum.FOUR },
        { label: BathRoomEum.FOUR_POINT_FIVE, value: BathRoomEum.FOUR_POINT_FIVE },
        { label: BathRoomEum.FIVE, value: BathRoomEum.FIVE },
        { label: BathRoomEum.FIVE_POINT_FIVE, value: BathRoomEum.FIVE_POINT_FIVE },
        { label: BathRoomEum.SIX_OR_MORE, value: BathRoomEum.SIX_OR_MORE },
    ]);
    const [selectedBathRooms, setSelectedBathRooms] = useState([]);
    const [furnished, setFurnished] = useState(false);
    const [laundry, setLaundry] = useState(false);
    const [agreement, setAgreement] = useState([
        { label: AgreementEum.MONTHLY, value: AgreementEum.MONTHLY },
        { label: AgreementEum.LEASE, value: AgreementEum.LEASE },
    ]);
    const [selectedAgreements, setSelectedAgreements] = useState([]);
    const [utilitiesIncluded, setUtilitiesIncluded] = useState([
        { label: UtilitiesIncluded.HEATING, value: UtilitiesIncluded.HEATING },
        { label: UtilitiesIncluded.HYDRO, value: UtilitiesIncluded.HYDRO },
        { label: UtilitiesIncluded.INTERNET_AND_CABLE_TV, value: UtilitiesIncluded.INTERNET_AND_CABLE_TV },
        { label: UtilitiesIncluded.SATELLITE_TV, value: UtilitiesIncluded.SATELLITE_TV },
        { label: UtilitiesIncluded.WATER, value: UtilitiesIncluded.WATER },
    ]);
    const [selectedUtilitiesIncluded, setSelectedUtilitiesIncluded] = useState([]);
    const [parkingSpots, setParkingSpots] = useState([
        { label: ParkingSpotEnum.ONE, value: ParkingSpotEnum.ONE },
        { label: ParkingSpotEnum.TWO, value: ParkingSpotEnum.TWO },
        { label: ParkingSpotEnum.THREE, value: ParkingSpotEnum.THREE },
        { label: ParkingSpotEnum.FOUR, value: ParkingSpotEnum.FOUR },
        { label: ParkingSpotEnum.FIVE_OR_MORE, value: ParkingSpotEnum.FIVE_OR_MORE },
    ]);
    const [selectedParkingSpots, setSelectedParkingSpots] = useState([]);
    const [date, setDate]: any = useState(new Date());
    const [selectedDate, setSelectedDate] = useState('');
    const [show, setShow] = useState(false);
    const [location, setLocation]: any = useState(null);
    const [errorMsg, setErrorMsg]: any = useState(null);
    const [address, setAddress]: any = useState(null);
    const [addressError, setAddressError] = useState('');
    const [hasPermission, setHasPermission] = useState(null);
    const [startCamera, setStartCamera] = React.useState(false);
    const [capturedImage, setCapturedImage] = useState('');
    const [photoError, setPhotoError] = useState('');
    const [userToken, setUserToken] = useState('');

    const cameraRef: any = useRef(null)


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }
            let location: any = await Location.getCurrentPositionAsync({});
            const address: any = await Location.reverseGeocodeAsync(location.coords);
            console.log('====>>>', location);
            setLocation(location?.coords);
            setAddress(address);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status == 'granted');
        })();
        getTokenValue();
    }, []);

    const getTokenValue = async () => {
        const token = await LocalStorge.getValue('token').then((token) => {
            if (token) {
                setUserToken(token);
            } else {
                setUserToken('');
            }
        });
    }

    const toggleSwitch = () => setFurnished(previousState => !previousState);
    const toggleLaundry = () => setLaundry(previousState => !previousState);

    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        let dateVal: any = currentDate.getDate();
        let mouthVal: any = currentDate.getMonth() + 1;
        let yearVal: any = currentDate.getFullYear();
        debugger;
        setSelectedDate(`${dateVal}-${mouthVal}-${yearVal}`);
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode: any) => {
        setShow(true);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    async function takePicture() {
        if (cameraRef) {
            const data = await cameraRef.current.takePictureAsync();
            setCapturedImage(data.uri);
            setStartCamera(false);
            setPhotoError('');
            console.log('====>>', data);
        }
    }

    const submitClickHandler = async () => {
        debugger;
        if (capturedImage == "") {
            setPhotoError('Add Photo');
        }
        if (postTitle == "") {
            setPostTitleError('Enter valid Post Title');
        }
        if (postDescription == "") {
            setPostDescriptionError('Enter valid Post Description');
        }
        if (price.length == "") {
            setPriceError('Enter valid Price');
        }
        if (address.length == "") {
            setAddressError('Add Location Permission');
        }

        if (postTitle.length > 0 && postDescription.length > 0 && price.length > 0 && address.length > 0) {
            const base64 = await FileSystem.readAsStringAsync(capturedImage, { encoding: 'base64' });
            const buffer = Buffer.from(base64, 'base64')
            const formData: any = new FormData();
            formData.append('title', postTitle);
            formData.append('description', postDescription);
            formData.append('bedroom', selectedBedRooms);
            formData.append('pets', selectedPets);
            formData.append('aminities', selectedAmenities);
            formData.append('bathroom', selectedBathRooms);
            formData.append('furnished', furnished);
            formData.append('agreement', selectedAgreements);
            formData.append('price', price);
            formData.append('loundry', laundry);
            formData.append('utilities_include', selectedUtilitiesIncluded);
            formData.append('parking', selectedParkingSpots);
            formData.append('property_location', {
                coordinates: [location.latitude, location.longitude],
                address: `${address[0]?.city}, ${address[0]?.region}, ${address[0]?.country}`
            });
            formData.append('file', buffer);
            console.log('====>>>', formData);
            axios({
                url: `https://trendar.herokuapp.com/api/posts/create`,
                method: 'POST',
                data: formData,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${userToken}`
                }
            })
                .then(function (response) {
                    console.log("response :", response);
                })
                .catch(function (error) {
                    console.log("error:", error?.response);
                    console.log('===>>>', error);
                })
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                startCamera ? (
                    <View style={{ flex: 1 }}>
                        <Camera style={{ flex: 1 }}
                            ref={cameraRef}
                        >
                            <View
                                style={{
                                    flex: 1,
                                    backgroundColor: 'transparent',
                                    flexDirection: 'row',
                                }}>

                                <View style={{ flex: 1, flexDirection: "row", alignItems: "center", margin: 20, }}>
                                    <TouchableOpacity
                                        onPress={takePicture}
                                        style={{
                                            alignSelf: 'flex-end',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: 'transparent',
                                            flex: 1
                                        }}>
                                        <FontAwesome
                                            name="camera"
                                            style={{ color: "#fff", fontSize: 40 }}
                                        />
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Camera>
                    </View>
                ) : (
                    <>
                        <View style={styles.container}>
                            <View style={{ marginHorizontal: wp(5), flex: 1, marginTop: hp(2) }}>
                                <View>
                                    <PrimaryText textStyle={{ fontSize: 34, lineHeight: 50, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                        Add Property
                                    </PrimaryText>
                                </View>
                                <View style={{ flex: 1, margin: 5 }}>
                                    <ScrollView showsVerticalScrollIndicator={false}>

                                        <TouchableOpacity onPress={() => { setStartCamera(true) }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp(3) }}>
                                            <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                Add Photo
                                            </PrimaryText>
                                            {
                                                capturedImage ? (
                                                    <Image style={{ width: 100, height: 100 }} source={{ uri: capturedImage }} />
                                                ) : (null)
                                            }
                                        </TouchableOpacity>
                                        {
                                            photoError ? (
                                                <PrimaryText textStyle={{ fontSize: 14, color: 'red', fontWeight: '400', fontFamily: 'acme', alignSelf: 'flex-start' }}>
                                                    {photoError}
                                                </PrimaryText>
                                            ) : null
                                        }


                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp(3) }}>
                                            <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                Location
                                            </PrimaryText>
                                            <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                {/* {address[0] && `${address[0]?.city}, ${address[0]?.region}, ${address[0]?.country}`} */}
                                            </PrimaryText>
                                        </View>
                                        {
                                            addressError ? (
                                                <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme', alignSelf: 'flex-start' }}>
                                                    {addressError}
                                                </PrimaryText>
                                            ) : null
                                        }

                                        <View style={{ height: hp(8), flexDirection: 'row', borderWidth: 2, borderColor: '#E8E6EA', borderRadius: 15, marginTop: hp(3) }}>
                                            <PrimaryText textStyle={styles.labelStyle}>
                                                Post title
                                            </PrimaryText>
                                            <PrimaryTextInput
                                                value={postTitle}
                                                onChangeText={(val: any) => { setPostTitle(val), setPostTitleError('') }}
                                                inputStyle={styles.textInput}
                                                onSubmitEditing={() => { }}
                                            />
                                        </View>
                                        {
                                            postTitleError ? (
                                                <PrimaryText textStyle={{ fontSize: 14, color: 'red', fontWeight: '400', fontFamily: 'acme', alignSelf: 'flex-start' }}>
                                                    {postTitleError}
                                                </PrimaryText>
                                            ) : null
                                        }

                                        <View style={{ height: hp(8), flexDirection: 'row', borderWidth: 2, borderColor: '#E8E6EA', borderRadius: 15, marginTop: hp(3) }}>
                                            <PrimaryText textStyle={styles.labelStyle}>
                                                Post description
                                            </PrimaryText>
                                            <PrimaryTextInput
                                                value={postDescription}
                                                onChangeText={(val: any) => { setPostDescription(val), setPostDescriptionError('') }}
                                                inputStyle={styles.textInput}
                                                onSubmitEditing={() => { }}
                                            />
                                        </View>
                                        {
                                            postDescriptionError ? (
                                                <PrimaryText textStyle={{ fontSize: 14, color: 'red', fontWeight: '400', fontFamily: 'acme', alignSelf: 'flex-start' }}>
                                                    {postDescriptionError}
                                                </PrimaryText>
                                            ) : null
                                        }

                                        <View style={{ height: hp(8), flexDirection: 'row', borderWidth: 2, borderColor: '#E8E6EA', borderRadius: 15, marginTop: hp(3) }}>
                                            <PrimaryText textStyle={styles.labelStyle}>
                                                Price
                                            </PrimaryText>
                                            <PrimaryTextInput
                                                value={price}
                                                onChangeText={(val: any) => { setPrice(val), setPriceError('') }}
                                                inputStyle={styles.textInput}
                                                onSubmitEditing={() => { }}
                                                keyboardType={'phone-pad'}
                                            />
                                        </View>
                                        {
                                            priceError ? (
                                                <PrimaryText textStyle={{ fontSize: 14, color: 'red', fontWeight: '400', fontFamily: 'acme', alignSelf: 'flex-start' }}>
                                                    {priceError}
                                                </PrimaryText>
                                            ) : null
                                        }

                                        <View style={{ marginTop: hp(3) }}>
                                            <PrimaryMultiSelect
                                                data={bedRoomData}
                                                placeholder="Select Bedroom"
                                                onBlur={(item: any) => setSelectedBedRooms(item)}
                                            />
                                        </View>

                                        {/* <View style={{ marginLeft: wp(1), marginTop: hp(3) }}>
                                <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                    Price Range (Monthly)
                                </PrimaryText>
                                <PrimaryRange
                                    minValue={0}
                                    maxValue={5000}
                                    setMinValue={(val: any) => alert(val)}
                                    setMaxValue={(val: any) => alert(val)}
                                />
                            </View> */}

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={propertyType}
                                                placeholder="Property Type"
                                                onBlur={(item: any) => setSelectedPropertyTypes(item)}
                                            />
                                        </View>

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={petData}
                                                placeholder="Pet"
                                                onBlur={(item: any) => setSelectedPets(item)}
                                            />
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: hp(3) }}>
                                            <TouchableOpacity onPress={() => { showDatepicker() }}>
                                                <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                    Date
                                                </PrimaryText>
                                            </TouchableOpacity>
                                            {show && (
                                                <DateTimePicker
                                                    testID="dateTimePicker"
                                                    value={date}
                                                    mode={'date'}
                                                    is24Hour={true}
                                                    display="default"
                                                    onChange={onChange}
                                                />)
                                            }
                                            {selectedDate ? (
                                                <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                    {selectedDate}
                                                </PrimaryText>
                                            ) : (
                                                null
                                            )}
                                        </View>

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={amenitiesData}
                                                placeholder="Amenities"
                                                onBlur={(item: any) => setSelectedAmenities(item)}
                                            />
                                        </View>

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={bathRoomData}
                                                placeholder="Bathroom"
                                                onBlur={(item: any) => setSelectedBathRooms(item)}
                                            />
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                Furnished
                                            </PrimaryText>
                                            <Switch
                                                trackColor={{ false: '#767577', true: '#767577' }}
                                                thumbColor={furnished ? '#E94057' : '#f4f3f4'}
                                                ios_backgroundColor="#3e3e3e"
                                                onValueChange={toggleSwitch}
                                                value={furnished}
                                            />
                                        </View>

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={agreement}
                                                placeholder="Agreement"
                                                onBlur={(item: any) => setSelectedAgreements(item)}
                                            />
                                        </View>

                                        <View style={{ marginLeft: wp(1), marginTop: hp(3) }}>
                                            <PrimaryText textStyle={{ fontSize: 14, alignSelf: 'flex-start', color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                Size (sqft)
                                            </PrimaryText>
                                            <PrimaryRange
                                                minValue={0}
                                                maxValue={6000}
                                                setMinValue={(val: any) => alert(val)}
                                                setMaxValue={(val: any) => alert(val)}
                                            />
                                        </View>

                                        <View style={{}}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                                <PrimaryText textStyle={{ fontSize: 14, color: '#000', fontWeight: '400', fontFamily: 'acme' }}>
                                                    Laundry (in unit)
                                                </PrimaryText>
                                                <Switch
                                                    trackColor={{ false: '#767577', true: '#767577' }}
                                                    thumbColor={laundry ? '#E94057' : '#f4f3f4'}
                                                    ios_backgroundColor="#3e3e3e"
                                                    onValueChange={toggleLaundry}
                                                    value={laundry}
                                                />
                                            </View>
                                        </View>

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={utilitiesIncluded}
                                                placeholder="Utilities Included"
                                                onBlur={(item: any) => setSelectedUtilitiesIncluded(item)}
                                            />
                                        </View>

                                        <View style={{}}>
                                            <PrimaryMultiSelect
                                                data={parkingSpots}
                                                placeholder="Parking spots"
                                                onBlur={(item: any) => setSelectedParkingSpots(item)}
                                            />
                                        </View>

                                        <View style={{ justifyContent: 'flex-end', marginBottom: hp(5) }}>
                                            <PrimaryButton
                                                buttonStyle={{
                                                    marginTop: hp(4),
                                                    backgroundColor: "#E94057",
                                                    height: hp(8),
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    borderRadius: 12,
                                                    fontFamily: 'acme'
                                                }}
                                                buttonTextStyle={{ color: "#fff", }}
                                                onPress={() => { submitClickHandler() }}
                                            >
                                                <PrimaryText textStyle={{ fontSize: 16, alignSelf: 'center', color: '#fff', fontWeight: '400', fontFamily: 'acme' }}>
                                                    Submit
                                                </PrimaryText>
                                            </PrimaryButton>
                                        </View>

                                    </ScrollView>
                                </View>
                                {/* <View style={{ justifyContent: 'flex-end', marginBottom: hp(5) }}>
                        <PrimaryButton
                            buttonStyle={{
                                marginTop: hp(4),
                                backgroundColor: "#E94057",
                                height: hp(8),
                                justifyContent: "center",
                                alignItems: "center",
                                borderRadius: 12,
                                fontFamily: 'acme'
                            }}
                            buttonTextStyle={{ color: "#fff", }}
                            onPress={() => { }}
                        >
                            <PrimaryText textStyle={{ fontSize: 16, alignSelf: 'center', color: '#fff', fontWeight: '400', fontFamily: 'acme' }}>
                                Submit
                            </PrimaryText>
                        </PrimaryButton>
                    </View> */}
                            </View>
                        </View>
                    </>
                )
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    textInput: {
        height: hp(10),
        width: wp(80),
        fontSize: 14,
        marginLeft: wp(8),
        color: '#000'
    },
    labelStyle: {
        fontSize: 12,
        alignSelf: 'flex-start',
        color: 'rgba(0, 0, 0, 0.4)',
        fontWeight: '400',
        position: 'absolute',
        marginTop: hp(-1.3),
        marginLeft: wp(6),
        backgroundColor: '#fff',
        paddingHorizontal: wp(2),
        fontFamily: 'acme'
    },
    dropdown: {
        height: hp(5),
        backgroundColor: 'transparent',
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
        // marginTop:hp(-5)
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 14,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    icon: {
        marginRight: 5,
    },
    selectedStyle: {
        borderRadius: 12,
        color: '#fff'
    },
})