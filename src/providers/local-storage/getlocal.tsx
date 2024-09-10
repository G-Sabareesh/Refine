"use client";

export const token = () => {
  return localStorage.getItem("TOKEN_KEY");
};
export const role = () => {
  return localStorage.getItem("role");
};
export const id = () => {
  return localStorage.getItem("id");
};
