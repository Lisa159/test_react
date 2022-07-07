import "./App.css";
import {
  DxcApplicationLayout,
  DxcSidenav,
} from "@dxc-technology/halstack-react";

function App() {
  return (
    <DxcApplicationLayout visibilityToggleLabel="Content">
      <DxcApplicationLayout.SideNav>
        <DxcSidenav.Title>Application layout with sidenav</DxcSidenav.Title>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
        <p>SideNav Content</p>
      </DxcApplicationLayout.SideNav>
      <DxcApplicationLayout.Main>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>

        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <p>Main Content</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wTi8yLyHeb8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </DxcApplicationLayout.Main>
    </DxcApplicationLayout>
  );
}

export default App;
