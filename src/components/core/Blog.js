import React from 'react'
import { connect } from 'react-redux'

class Blog extends React.Component {
    render() {
        let blog = this.props.selectedBlog
        return (
            <div>
                <h1>
                    {blog.title}
                </h1>
                <p>{blog.description}</p>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        selectedBlog: state.blogsReducer.selectedBlog
    }
}

export default connect(mapStateToProps, null)(Blog)