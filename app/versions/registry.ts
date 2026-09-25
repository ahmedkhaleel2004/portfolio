export const versions = [
  { id: "original", label: "Original" },
  { id: "index", label: "Index" },
  { id: "editorial", label: "Editorial" },
  { id: "terminal", label: "Terminal" },
  { id: "split", label: "Split" },
] as const;

export type VersionId = (typeof versions)[number]["id"];
