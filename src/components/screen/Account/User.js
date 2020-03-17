import React, { Component, version } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { Icon, Icom } from 'native-base'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import { getAllUsers } from '../../redux/action/user';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: '#F8F8F8'
  },
  header: {
    backgroundColor: 'white'
  },
  content: {
    height: 490,
    marginHorizontal: 10,
    marginTop: 10
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'

  }
})

class User extends Component {

  // renderRow = ({ item }) => {
  //   return (
  //     <View>
  //       <Text>{item.name_user}</Text>
  //     </View>
  //   )
  // }

  // async getAllUsers() {
  //   await this.props.dispatch(getAllUsers());
  // }
  // componentDidMount() {
  //   this.getAllUsers ();
  // }


  render () {
    // const { users } = this.props;
    return (
      <View style={styles.wrap}>
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingList')} style={{ marginBottom: 15 }}>
              <Icon name='arrow-back' style={{ marginLeft: 20, marginTop: 20, color: '#75797C' }} />
            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1, marginLeft: -40 }}><Text style={{ fontSize: 20, color: '#75797C' }}>Profile</Text></View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={{ height: 230, backgroundColor: 'white', borderRadius: 10 }}>
            <View style={{ alignItems: 'center', marginTop: 15 }}>
              <View style={{ width: 95, height: 95, borderRadius: 50, borderWidth: 3, borderColor: '#57DBE9', justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: 80, height: 80, borderRadius: 40 }} source={require('../../../img/profile/profile1.png')} />
              </View>

              {/* <View>
                <FlatList>
                  data={users}
                  renderItem={this.renderRow}
                  keyExtractor={(item) => item.id_user.toString()}
                </FlatList>
              </View> */}

              <Text style={{ paddingTop: 10, fontSize: 18, fontWeight: 'bold', color: '#515151' }}>Zlatan Ibrahimovic</Text>
              
              <TouchableOpacity style={{ height: 50, backgroundColor: '#57DBE9', paddingHorizontal: 85, marginTop: 10, justifyContent: 'center', borderRadius: 10 }}>
                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('UpdateUser')}>Edit Profile</Text>
                {/* onPress={() => this.props.navigation.navigate('EditProduct', {product: item})} */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'white', height: 50, borderRadius: 10 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: 50, alignItems: 'center' }}>
              <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>Payments</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon name='arrow-forward' />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'white', height: 50, borderRadius: 10 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: 50, alignItems: 'center' }}>
                  <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>Contact</Text>
              </TouchableOpacity>
                  <TouchableOpacity>
                <Icon name='arrow-forward' />
              </TouchableOpacity>
                </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'white', height: 50, borderRadius: 10 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: 50, alignItems: 'center' }}>
                  <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>Term and condition</Text>
              </TouchableOpacity>
                  <TouchableOpacity>
                <Icon name='arrow-forward' />
              </TouchableOpacity>
                </View>
          </View>
          <View style={{ marginTop: 10, backgroundColor: 'white', height: 50, borderRadius: 10 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginHorizontal: 10, height: 50, alignItems: 'center' }}>
                  <TouchableOpacity>
                <Text style={{ fontSize: 18 }}>About</Text>
              </TouchableOpacity>
                  <TouchableOpacity>
                <Icon name='arrow-forward' />
              </TouchableOpacity>
                </View>
          </View>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity><Icon name='home' style={{ fontSize: 35, color: '#BDC0C6', marginHorizontal: 29 }} /></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('BookingList')}><Icon name='book' style={{ fontSize: 35, color: '#BDC0C6', marginHorizontal: 29 }} /></TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('User')}><Icon name='person' style={{ fontSize: 35, color: '#57DBE9', marginHorizontal: 29 }} /></TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default User
// const mapStateToProps = (state) => {
//   return {
//     users: state.users.users
//   }
// }

// export default connect(mapStateToProps)(User);
