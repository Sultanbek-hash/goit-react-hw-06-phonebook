import { createSelector } from "@reduxjs/toolkit";

export const getAllContacts = store => store.contacts;
export const getFilter = state => state.filter;

export const getFilteredContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({name}) => 
    name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
