import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
const profile = require('../../assets/MuhumuzaImage.png')

const Profile = ({navigation}) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        marginTop: 50,
      }}
    >
      {/* Header Section */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: '#EB5D72', // Red adjusted here
          padding: 16,
          borderRadius: 8,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            source={profile} // Replace with actual profile picture
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              marginRight: 16,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
              }}
            >
              MUHUMUZA
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <View style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 3,
            shadowColor: '#000',
            shadowOpacity: 0.2,
            shadowRadius: 5,
            elevation: 5,
            width: 70
          }}>
            <Text
              style={{
                fontSize: 14,
                color: 'red', // Red adjusted here
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              Active
            </Text>
          </View>
          <TouchableOpacity onPress={() => {
            navigation.navigate('EditProfile')
          }}>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginTop: 10
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Member Bio Section */}
      <View
        style={{
          marginTop: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          Member Bio
        </Text>
        <View
          style={{
            backgroundColor: '#f9f9f9',
            elevation: 3,
            padding: 16,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontWeight: 500,
                color: 'gray'
              }}
            >
              Registered Health Center:
            </Text>{' '}
            Apex Health Services
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontWeight: 500,
                color: 'gray'
              }}
            >
              Education Level:
            </Text>{' '}
            University
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 8,
            }}
          >
            <Text
              style={{
                fontWeight: 500,
                color: 'gray'
              }}
            >
              Programs:
            </Text>{' '}
            SRH Workshops, Mental Health Support, Contraceptive Education
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 14,
                color: '#EB5D72', // Adjusted red color here
                marginTop: 8,
                fontWeight: 'bold',
                textAlign: 'right',
              }}
            >
              View Resources
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* My Cards Section */}
      <View
        style={{
          marginTop: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: 500,
            marginBottom: 8,
          }}
        >
          My Services
        </Text>

        <View style={{ backgroundColor: 'white', elevation: 5, padding: 20, borderRadius: 10 }}>
          <View
            style={{
              backgroundColor: '#EB5D72', // Red adjusted here
              padding: 16,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
              marginBottom: -16,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Service:
              </Text>{' '}
              Counseling Session
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Access:
              </Text>{' '}
              Scheduled for 10/01/2025
            </Text>
          </View>

          <View
            style={{
              backgroundColor: '#EB5D72', // Adjusted red color here
              padding: 16,
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Service:
              </Text>{' '}
              Contraceptive Education
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Access:
              </Text>{' '}
              Ongoing
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                marginBottom: 8,
              }}
            >
              <Text
                style={{
                  fontWeight: 'bold',
                }}
              >
                Status:
              </Text>{' '}
              Active
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: '#fff',
                textAlign: 'right',
                marginTop: 16,
              }}
            >
              ApexHealth Care
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  );
};

export default Profile;
