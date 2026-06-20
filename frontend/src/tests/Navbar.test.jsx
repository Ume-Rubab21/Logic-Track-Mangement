import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";

test("renders LogiTrack logo text", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getAllByText(/LOGI/i).length).toBeGreaterThan(0);
  expect(screen.getAllByText(/TRACK/i).length).toBeGreaterThan(0);
});

test("shows login and register before login", () => {
  localStorage.clear();

  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );

  expect(screen.getAllByText("Login").length).toBeGreaterThan(0);
  expect(screen.getByText("Register")).toBeInTheDocument();
});