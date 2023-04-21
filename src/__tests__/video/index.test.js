import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import VideoItem from "@/components/VideoItem";
import Home from "@/pages/index";
import { AuthProvider } from "@/contexts";
import { ReactQueryProvider } from "@/contexts/ReactQuery";

import "@testing-library/jest-dom";

const setup = () => {
  localStorage.setItem("email", "email@gmail.com");
  const { getByText, queryAllByTestId } = render(
    <AuthProvider>
      <ReactQueryProvider>
        <Home />
      </ReactQueryProvider>
    </AuthProvider>
  );
  return {
    queryAllByTestId,
    getByText,
  };
};

describe("Video", () => {
  it("Show video title", async () => {
    const { getByText } = setup();
    await waitFor(() => {
      const title = getByText(
        "MỸ TÂM - HẸN ƯỚC TỪ HƯ VÔ (LIVE) | MY SOUL 1981"
      );
      expect(title).toBeInTheDocument();
    });
  });

  it("voting (like)", async () => {
    const { queryAllByTestId } = setup();
    await waitFor(() => {
      const voteLike = queryAllByTestId("vote-like");
      expect(voteLike[0]).toBeInTheDocument();
    });
  });
  it("voting (dislike)", async () => {
    const { queryAllByTestId } = setup();
    await waitFor(() => {
      const voteDislike = queryAllByTestId("vote-dislike");
      expect(voteDislike[0]).toBeInTheDocument();
    });
  });
});
