import { render, screen } from '@testing-library/react';
import App from './App';

describe("Check eligibility", () => {
  it("should render the title", () => {
    render(<App />);
    expect(screen.getByText("Check your eligibility")).toBeInTheDocument();
  });
});
