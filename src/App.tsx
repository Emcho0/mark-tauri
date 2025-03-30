import { Content, RootLayout, Sidebar } from "./components";

function App() {
  return (
    <RootLayout>
      <Sidebar
        className="p-2 border-4 bg-[#15171D] 
      border-[#343742]"
      >
        Placeholder za note
      </Sidebar>
      <Content className="border-4 border-[#1D202B] bg-[#0F101B]">
        Sadrzaj
      </Content>
    </RootLayout>
  );
}

export default App;
