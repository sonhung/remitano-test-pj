import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import Share from "@/pages/share-video";
import { AuthProvider } from "@/contexts";
import { ReactQueryProvider } from "@/contexts/ReactQuery";

import "@testing-library/jest-dom";

const setup = () => {
  localStorage.setItem("email", "email@gmail.com");
  const { container, getByText } = render(
    <AuthProvider>
      <ReactQueryProvider>
        <Share />
      </ReactQueryProvider>
    </AuthProvider>
  );
  const share = screen.getByRole("button", { name: "Share" });
  const inputLink = screen.queryByPlaceholderText("Youtube url");
  const inputDesc = screen.queryByPlaceholderText("Description");
  return {
    share,
    inputLink,
    inputDesc,
    container,
    getByText,
  };
};

describe("Share video", () => {
  it("Show button share", async () => {
    const { share } = setup();
    expect(share).toBeInTheDocument();
  });

  it("Required yourube link", async () => {
    const { share, getByText } = setup();
    fireEvent.click(share);
    await waitFor(() => {
      const requiredUrl = getByText(/Please input youtube link/i);
      expect(requiredUrl).toBeInTheDocument();
    });
  });

  it("Validate yourube link", async () => {
    const { share, inputLink, getByText } = setup();
    fireEvent.change(inputLink, { target: { value: "link link" } });
    fireEvent.click(share);
    await waitFor(() => {
      const emailUrl = getByText(/Youtube url invalid/i);
      expect(emailUrl).toBeInTheDocument();
    });
  });

  it("Show success when share link", async () => {
    const { share, inputLink, inputDesc, getByText } = setup();
    fireEvent.change(inputLink, {
      target: {
        value:
          "https://www.youtube.com/watch?v=5mYA4WswGdw&list=RDRr5bP7uLnfk&index=13&ab_channel=T.AProduction",
      },
    });
    fireEvent.change(inputDesc, { target: { value: "Video description" } });
    fireEvent.click(share);
    await waitFor(() => {
      const shareSuccess = getByText(/View Shared Videos/i);
      fireEvent.click(shareSuccess);
      expect(shareSuccess).toBeInTheDocument();
    });
  });
});
