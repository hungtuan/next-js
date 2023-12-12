const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Admin Header</h1>
      <main>{children}</main>
      <footer>
        <h1>Admin Footer</h1>
      </footer>
    </div>
  );
};

export default AdminLayout;
