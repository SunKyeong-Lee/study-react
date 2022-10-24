// 클래스형 컴포넌트
import { Component } from "react";

class DataPlusDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: [
        {
          title: '홍길동전',
          page: 100,
          author: '허균',
          price: 8000,
          ISBN: 'abc1234' 
        }
      ],
      inputContent: [
        {
          title: '',
          author: '',
          ISBN: ''
        }
      ]
    }
    this.onchange = this.onchange.bind(this);
    this.getBook = this.getBook.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  /** 바뀐 값을 가져오는 함수 */
  onchange(e) {
    // this.state.inputContent값이 객체이므로 안의 속성을 유지하기 위해 ... 연산자 사용
    const newContent = {
      ...this.state.inputContent,
      [e.target.name]: e.target.value
    } 
    this.setState( {inputContent: newContent} )
  }

  /** 배열에 값을 넣는 함수 - 데이터 추가 */
  getBook(e) {
    e.preventDefault();  // submit의 새로고침 취소

    // 아래 값은 state의 값을 직접적으로 바꾸기 때문에 권장하지 않음
    // this.state.book.push(this.state.inputContent);

    // concat을 이용하여 두 개의 값을 더한 배열을 만든다. (book + inputContent)
    const newBook = this.state.book.concat(this.state.inputContent);
    this.setState( {book: newBook} );
  }

  /** book.title을 클릭하면 삭제하는 함수 - 데이터 삭제 */
  deleteBook(ISBN) {
    const newBook = this.state.book.filter((b) => (b.ISBN != ISBN));
    this.setState( {book: newBook} )
  }

  render() { 
    const {book} = this.state;
    const bookItem = book.map((book, index) => (
      // book.title을 클릭하면 삭제
      // 이벤트(onClick) 안에서 인수를 전달할 때에는 화살표함수로 감싸서 전달
      <li key={book.ISBN} onClick={() => {this.deleteBook(book.ISBN)}}> 
        {book.title}
      </li>
    ));

    return (
      <div>
        {/** 데이터 추가
         * 책 이름을 추가하는 input을 작성하고 submit버튼을 누르면 (새로고침 X)
         * this.state.book에 추가될 수 있도록 작성
         * 각각의 값들이 저장될 변수공간을 만들어서 사용, 태그속성 추가가능
        */}
        <form action="" onSubmit={this.getBook} className="get-book">
          <label htmlFor="">책이름</label>
          <input type="text" name="title" onChange={this.onchange} />
          <label htmlFor="">저자</label>
          <input type="text" name="author" onChange={this.onchange} />
          <label htmlFor="">책넘버</label>
          <input type="text" name="ISBN" onChange={this.onchange} />
          <input type="submit" value="제출" />
        </form>

        <ol>{bookItem}</ol>
      </div>
    );
  }
}
 
export default DataPlusDelete;