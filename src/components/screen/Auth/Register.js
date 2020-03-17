import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  Content,
  Form,
  Item,
  Input,
  Icon,
  ListItem,
  CheckBox,
  Body,
} from 'native-base';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
});

class Register extends Component {
  render() {
    return (
      <View style={styles.wrap}>
        <View>
          <Image
            style={{position: 'absolute'}}
            source={require('../../../img/icon/bg2.png')}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Icon
              name="arrow-back"
              style={{color: 'white', marginLeft: 20, marginTop: 20}}
            />
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: 21,
                    marginLeft: 20,
                    fontWeight: 'bold',
                  }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Content style={{paddingHorizontal: 40, marginTop: 45}}>
          <Form>
            <Item>
              <Input
                placeholder="Username"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
              />
            </Item>
            <Item>
              <Input
                placeholder="Email"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
              />
            </Item>
            <Item>
              <Input
                placeholder="Address"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
              />
            </Item>
            <Item>
              <Input
                placeholder="Gender"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
              />
            </Item>
            <Item>
              <Input
                placeholder="Phone Number"
                placeholderTextColor="#414141"
                style={{color: '#414141'}}
                keyboardType={'numeric'}
              />
            </Item>
            <Item>
              <Input
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#414141"
                style={{color: '#E5E2E2'}}
              />
            </Item>
          </Form>
          <TouchableOpacity
            style={{
              height: 44,
              backgroundColor: '#57DBE9',
              marginTop: 20,
              borderRadius: 24,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 20}}>Sign up</Text>
          </TouchableOpacity>
        </Content>
      </View>
    );
  }
}

export default Register;
