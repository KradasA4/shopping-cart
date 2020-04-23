import React from 'react';
import './App.css';
import CategoryMenu from './components/Category/CategoryMenu';
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import Cart from './components/Cart/Cart';
import { productArray } from './components/ProductDisplay/ProductArray';
import { Col, Row } from 'antd';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: productArray,
      inCartItemId: []
    }
  }

  // getProducts = async() => {
  //   await Axios.get("http://makeup-api.herokuapp.com/api/v1/products.json")
  //   .then( response => {console.log(...response.data)})
  //   // .then(response => {this.setState({products: [...response.data], loadingStatus: null});})
  //   // .catch(error => {alert('Connection Problem\n' + error + '\nPlease try again');});
  // }

  // componentDidMount() {
  //   this.getProducts();
  // }

  filterByCategory = (state, category) => {
    return(
      state.filter( (item) => {
        return item.category === category
      })
    )
  }

  //  productArray ใช้ spread เป็น ...productArray เพื่อเป็นการ copy ค่า
  //  ไม่งั้น filteredProducts จะ pass by reference
  onClickMenu = (e) => {
    let filteredProducts;

    if(e.key === "1") {
      filteredProducts = [...productArray]
    } if(e.key === "2") {
      filteredProducts = this.filterByCategory(productArray, "burger");
    } else if (e.key === "3") {
      filteredProducts = this.filterByCategory(productArray, "side dish");
    } else if (e.key === "4") {
      filteredProducts = this.filterByCategory(productArray, "dessert");
    } else if (e.key === "5") {
      filteredProducts = this.filterByCategory(productArray, "beverage");
    }

    this.setState({
      products: filteredProducts
    })
  }

  // รับ target id จาก e.target.id ใน ProductCard มี ProductDisplay เป็นแค่ตัวส่ง props
  onClickAddToCart = (targetId) => {
    let newinCartItemId = [...this.state.inCartItemId, Number(targetId)];
    this.setState({
      inCartItemId: newinCartItemId
    })
  }

  render() {
    const { products, inCartItemId } = this.state 

    return (
      <div>
        <Row justify="space-between" gutter={1}>
          <Col span={4}>
            <CategoryMenu onClickMenu={this.onClickMenu} />
          </Col>
          <Col span={12}>
            <ProductDisplay products={products} onClickAddToCart={this.onClickAddToCart} />
          </Col>
          <Col span={6}>
            <Cart inCartItemId={inCartItemId} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
