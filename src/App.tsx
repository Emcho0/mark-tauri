import {
  ActionButtonsRow,
  Content,
  DraggableTopBar,
  RootLayout,
  Sidebar,
} from "./components";

const App = () => {
  return (
    <>
      <DraggableTopBar />
      <RootLayout>
        <Sidebar className="p-2">
          <ActionButtonsRow className="flex justify-between mt-1" />
        </Sidebar>
        <Content className="border-l bg-[#0F101D]/70 border-l-white/20">
          Sadrzaj
        </Content>
      </RootLayout>
    </>
  );
};

export default App;
