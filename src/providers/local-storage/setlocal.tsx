"use client";

interface LocalStore {
  token: string;
  role: string;
  id: string;
}

const setlocal = ({ token, role, id }: LocalStore) => {
  localStorage.setItem("TOKEN_KEY", token);
  localStorage.setItem("role", role);
  localStorage.setItem("id", id);
  return true;
};

export default setlocal;
