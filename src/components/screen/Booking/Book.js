/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import {Icon} from 'native-base';
// import { Container, Header, Tab, Tabs, TabHeading, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerWrap: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    height: 450,
    backgroundColor: '#F8F8F8',
  },
  card: {
    backgroundColor: 'white',
    marginHorizontal: 13,
    marginTop: 15,
    height: 103,
    borderRadius: 13,
    flexDirection: 'row',
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class BookList extends Component {
  static navigationOptions = {
    title: 'My Book',
    headerTintColor: '#57DBE9',
    headerTitleStyle: {
      fontSize: 18,
    },
  };
  render() {
    return (
      <View style={styles.wrap}>
        <View style={styles.headerWrap}>
          <TouchableOpacity
            style={{
              margin: 10,
              backgroundColor: '#57DBE9',
              width: 136,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 18,
            }}>
            <Text style={{color: 'white'}}>Book List</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              margin: 10,
              backgroundColor: 'white',
              width: 136,
              height: 35,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 18,
              borderWidth: 1,
              borderColor: '#57DBE9',
            }}>
            <Text style={{color: '#57DBE9'}}>History</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.card}>
              <Image
                style={{width: 77, height: 77, margin: 13, borderRadius: 5}}
                source={require('../../../img/favehotel/pic1.jpg')}
              />
              <View>
                <Text style={{marginTop: 15, fontSize: 17}}>
                  {' '}
                  Favehotel Padjajaran Bogor
                </Text>
                <Text style={{marginTop: 10, fontSize: 13, color: '#565656'}}>
                  {' '}
                  IDR 579.000
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon
                    style={{color: '#BDC0C6', fontSize: 20, marginRight: 10}}
                    name="locate"
                  />
                  <Text style={{color: '#565656', forntSize: 15}}>
                    Jl.Riau No. 12D, RT.03/RW/03
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.card}>
              <Image
                style={{width: 77, height: 77, margin: 13, borderRadius: 5}}
                source={require('../../../img/favehotel/pic1.jpg')}
              />
              <View>
                <Text style={{marginTop: 15, fontSize: 17}}>
                  {' '}
                  Favehotel Padjajaran Bogor
                </Text>
                <Text style={{marginTop: 10, fontSize: 13, color: '#565656'}}>
                  {' '}
                  IDR 579.000
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon
                    style={{color: '#BDC0C6', fontSize: 20, marginRight: 10}}
                    name="locate"
                  />
                  <Text style={{color: '#565656', forntSize: 15}}>
                    Jl.Riau No. 12D, RT.03/RW/03
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                style={{width: 77, height: 77, margin: 13, borderRadius: 5}}
                source={require('../../../img/favehotel/pic1.jpg')}
              />
              <View>
                <Text style={{marginTop: 15, fontSize: 17}}>
                  {' '}
                  Favehotel Padjajaran Bogor
                </Text>
                <Text style={{marginTop: 10, fontSize: 13, color: '#565656'}}>
                  {' '}
                  IDR 579.000
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon
                    style={{color: '#BDC0C6', fontSize: 20, marginRight: 10}}
                    name="locate"
                  />
                  <Text style={{color: '#565656', forntSize: 15}}>
                    Jl.Riau No. 12D, RT.03/RW/03
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                style={{width: 77, height: 77, margin: 13, borderRadius: 5}}
                source={require('../../../img/favehotel/pic1.jpg')}
              />
              <View>
                <Text style={{marginTop: 15, fontSize: 17}}>
                  {' '}
                  Favehotel Padjajaran Bogor
                </Text>
                <Text style={{marginTop: 10, fontSize: 13, color: '#565656'}}>
                  {' '}
                  IDR 579.000
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon
                    style={{color: '#BDC0C6', fontSize: 20, marginRight: 10}}
                    name="locate"
                  />
                  <Text style={{color: '#565656', forntSize: 15}}>
                    Jl.Riau No. 12D, RT.03/RW/03
                  </Text>
                </View>
              </View>
            </View>

            <View style={styles.card}>
              <Image
                style={{width: 77, height: 77, margin: 13, borderRadius: 5}}
                source={require('../../../img/favehotel/pic1.jpg')}
              />
              <View>
                <Text style={{marginTop: 15, fontSize: 17}}>
                  {' '}
                  Favehotel Padjajaran Bogor
                </Text>
                <Text style={{marginTop: 10, fontSize: 13, color: '#565656'}}>
                  {' '}
                  IDR 579.000
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 5,
                  }}>
                  <Icon
                    style={{color: '#BDC0C6', fontSize: 20, marginRight: 10}}
                    name="locate"
                  />
                  <Text style={{color: '#565656', forntSize: 15}}>
                    Jl.Riau No. 12D, RT.03/RW/03
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <Icon
              name="home"
              style={{fontSize: 35, color: '#BDC0C6', marginHorizontal: 29}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="book"
              style={{fontSize: 35, color: '#57DBE9', marginHorizontal: 29}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('User')}>
            <Icon
              name="person"
              style={{fontSize: 35, color: '#BDC0C6', marginHorizontal: 29}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BookList;
