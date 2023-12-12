import PostForm from "./PostForm";
import PostList from "./PostList";

function page() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <PostList />
      <PostForm />
    </div>
  );
}

export default page;
