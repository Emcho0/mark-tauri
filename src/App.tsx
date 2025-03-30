import { Content, RootLayout, Sidebar } from "./components";
function App() {
  return (
    <RootLayout>
      <Sidebar className="rounded-md border-[#BDBFCB] border-[2px] bg-[#15171D] p-2">
        Placeholder za note
      </Sidebar>

      <Content className="border-white border-l-[2.5px] bg-[#0F101B]">
        Sadrzaj
      </Content>
    </RootLayout>
  );
}

export default App;
