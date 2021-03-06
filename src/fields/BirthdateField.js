import React from "react";
import { Flex } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage
} from "@chakra-ui/form-control";
import { Field } from "formik";
import SelectNumber from "../components/SelectNumber";

const BirthDateField = () => {
  return (
    <Field name="birthDate">
      {({ field, form }) => {
        const { year, month, day } = field.value;
        return (
          <FormControl
            isInvalid={form.errors.birthDate && form.touched.birthDate}
          >
            <FormLabel htmlFor="birthDate">生年月日</FormLabel>
            <Flex id="birthDate">
              <SelectNumber
                firstNumber={1900}
                lastNumber={2021}
                placeholder="年"
                value={year}
                onChange={value =>
                  form.setFieldValue(field.name, {
                    ...field.value,
                    year: value
                  })
                }
              />
              <SelectNumber
                firstNumber={1}
                lastNumber={12}
                placeholder="月"
                value={month}
                onChange={value =>
                  form.setFieldValue(field.name, {
                    ...field.value,
                    month: value
                  })
                }
              />
              {/* Refactor this group so I can change the last number for days depending on month */}
              <SelectNumber
                firstNumber={1}
                lastNumber={31}
                placeholder="日"
                value={day}
                onChange={value =>
                  form.setFieldValue(field.name, {
                    ...field.value,
                    day: value
                  })
                }
              />
            </Flex>
            <FormErrorMessage>{form.errors.birthDate}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default BirthDateField;
