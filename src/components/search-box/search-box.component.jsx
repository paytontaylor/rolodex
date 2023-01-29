import { Component } from "react";
import "./search-box.styles.css"

const SearchBox = ({ onChange, className, placeholder }) => {
    return (
        <input 
            type="search"
            className={className}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}

// class SearchBox extends Component {
//     render() {
//         const { className, placeholder, onChange } = this.props;
//         return (
//             <input 
//                 type="search" 
//                 className={className}
//                 placeholder={placeholder} 
//                 onChange={onChange}
//             />
//         )
//     }
// }

export default SearchBox