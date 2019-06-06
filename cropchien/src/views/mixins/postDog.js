import  firebase  from '../../configFirebase.js'
import router from '../../router'

export default (post) => {
  firebase.db.collection('dogs').add(post.attributes).then(
    router.go(-1)
  );
}