import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";

test("renders layout with navbar, page content and footer", () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Test Page Content</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  expect(screen.getAllByText(/LOGI/i).length).toBeGreaterThan(0);
  expect(screen.getByText("Test Page Content")).toBeInTheDocument();
  expect(screen.getByText(/All Rights Reserved/i)).toBeInTheDocument();
});