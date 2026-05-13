export interface menuItemType {
  id: string;
  label: string;
  path: string;
}

export const menuItems: menuItemType[] = [
  { id: "1", label: "About", path: "/about" },
  { id: "2", label: "Project structure", path: "/structure" },
  { id: "3", label: "Virtual DOM", path: "/virtualDOM" },
  { id: "4", label: "Components", path: "/components" },
  { id: "5", label: "Props", path: "/props" },
  { id: "6", label: "State (useState)", path: "/state" },
  { id: "7", label: "LifeCycle (useEffect)", path: "/lifeCycle" },
  { id: "8", label: "Events", path: "/events" },
  { id: "9", label: "Ref-Fragment-key", path: "/ref" },
  { id: "10", label: "React.memo, (useMemo)", path: "/memo" },
  { id: "11", label: "useCallback", path: "/callback" },
  { id: "12", label: "Context (useContext)", path: "/context" },
  { id: "13", label: "React Router", path: "/router" },
  { id: "14", label: "Forms-Formik", path: "/forms" },
  { id: "15", label: "STORAGEs", path: "/storage" },
  { id: "16", label: "HOC", path: "/hoc" },
];
