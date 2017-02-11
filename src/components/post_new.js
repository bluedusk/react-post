import React ,{ PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostNew extends React.Component {

  static contextTypes = {
    router: PropTypes.object
  }
  // props is an object that contains form data
  // do not confuse with this.props, which is a property of react component
  onSubmit(props){
    // console.log(this.props);return;
    this.props.createPost(props)
      .then(() => {
        this.context.router.push('/');
      });
  }

  render() {
    // const handleSubmit = this.props.handleSubmit;
    // const title = this.props.fields.title;
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    //console.log(title);
    return (
      <form action="" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Form</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="">Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            { title.touched ? title.error : '' }
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="">Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            { categories.touched ? categories.error : '' }
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label htmlFor="">Content</label>
          <textarea className="form-control" {...content} ></textarea>
          <div className="text-help">
            { content.touched ? content.error : '' }
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        <Link className="btn btn-danger" to="/">Cancel</Link>
      </form>
    )
  }
}
function validate(values){
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if (!values.content) {
    errors.content = 'Enter some content';
  }

  return errors;
}

// connect: 1st argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps, 3rd is mapDispatchToProps
export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostNew);
