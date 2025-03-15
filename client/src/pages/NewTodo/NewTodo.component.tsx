import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { createTodo } from "../../services/todosService";
import { PageContainer } from "../../components/PageContainer/PageContainer.component";
import { Button } from "../../components/button/Button.component";
import {
  FormContainer,
  FormWrapper,
  InlineWrapper,
  TitleFormSection,
  PriorityFormSection,
  FormSection,
  ButtonWrapper,
} from "./NewTodo.styles";

interface NewTodoProps {
  theme: string;
  setTheme: (theme: string) => void;
}

export const NewTodo: React.FC<NewTodoProps> = ({ theme, setTheme }) => {
  const { token, user } = useUser();
  const defaultData = {
    title: "",
    description: "",
    completed: false,
    due_date: "",
    priority: "",
    user_id: user?.id,
    created_by: user?.id,
    tags: [],
    estimated_time: "",
    notes: "",
    color: "",
    recurring_type: "",
  };
  const [formData, setFormData] = useState(defaultData);
  console.log(formData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formattedData = {
      ...formData,
      due_date: formData.due_date ? new Date(formData.due_date) : undefined,
      priority: formData.priority ? Number(formData.priority) : undefined,
      estimated_time: formData.estimated_time
        ? Number(formData.estimated_time)
        : undefined,
      created_by: user?.id ?? 0, // Ensure created_by is always a number
      user_id: user?.id ?? 0, // Ensure user_id is always a number
    };

    // Ensure user.id is defined before submitting
    if (!user?.id) {
      console.error("User ID is missing, cannot create todo.");
      return;
    }

    try {
      const result = await createTodo(token ?? "", formattedData);
      if (result) {
        setFormData(defaultData);
      }
    } catch (error) {
      console.error("Failed to create new todo item", error);
    }
  };

  return (
    <PageContainer theme={theme} setTheme={setTheme} sidebarTitle="New Todo">
      <FormContainer>
        {/* <h1>Create New Todo</h1> */}
        <FormWrapper onSubmit={handleSubmit}>
          <InlineWrapper>
            <TitleFormSection>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </TitleFormSection>
            <PriorityFormSection>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
              </select>
              <label>Priority</label>
            </PriorityFormSection>
          </InlineWrapper>
          <InlineWrapper>
            <FormSection>
              <label>Due Date</label>
              <input
                type="date"
                name="due_date"
                value={formData.due_date}
                onChange={handleChange}
              />
            </FormSection>
            <FormSection>
              <label>Recurring Type</label>
              <input
                type="text"
                name="recurring_type"
                value={formData.recurring_type}
                onChange={handleChange}
              />
            </FormSection>
            <FormSection>
              <label>Estimated Time</label>
              <input
                type="text"
                name="estimated_time"
                value={formData.estimated_time}
                onChange={handleChange}
              />
            </FormSection>
          </InlineWrapper>
          <InlineWrapper>
            <FormSection>
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </FormSection>
            {/* <FormSection>
              <label>Color</label>
              <input
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </FormSection> */}
          </InlineWrapper>
          <InlineWrapper>
            {/* <FormSection>
              <label>Tags</label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={(e) => {
                  const tags = e.target.value
                    .split(",")
                    .map((tag) => tag.trim());
                  setFormData({ ...formData, tags });
                }}
              />
            </FormSection> */}
            {/* <FormSection>
              <label>Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </FormSection> */}
          </InlineWrapper>

          <ButtonWrapper>
            <Button
              type="submit"
              variant="outlined"
              size="small"
              shape="square"
            >
              Create Todo
            </Button>
          </ButtonWrapper>
        </FormWrapper>
      </FormContainer>
    </PageContainer>
  );
};
