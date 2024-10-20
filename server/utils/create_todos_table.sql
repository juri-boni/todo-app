CREATE TABLE todos (
    id SERIAL PRIMARY KEY,                      -- Unique identifier for each todo
    title VARCHAR(255) NOT NULL,                -- Title of the todo (required)
    description TEXT NULL,                      -- Optional description for more detail
    completed BOOLEAN DEFAULT FALSE,            -- Indicates whether the todo is completed (default is false)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,  -- Timestamp when the todo was created (required)
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL, -- Last update timestamp (required)
    deleted BOOLEAN DEFAULT FALSE NOT NULL,      -- Flag to indicate if the todo is deleted (soft delete, default is false)
    deleted_at TIMESTAMP NULL,                   -- Timestamp for when the todo was marked as deleted (optional)
    due_date TIMESTAMP NULL,                     -- Optional due date for the todo
    priority INTEGER CHECK (priority BETWEEN 1 AND 5) DEFAULT 3 NOT NULL,  -- Priority level (1: high, 5: lowest, default is 3)
    user_id INTEGER NULL,                        -- Foreign key to associate the todo with a user (optional)
    created_by INTEGER NOT NULL,                 -- Track who created the todo (optional)
    tags TEXT[] NULL,                            -- Array of strings for tags (optional)
    estimated_time INTEGER NULL,                 -- Estimated time to complete the task in minutes (optional)
    notes TEXT NULL,                             -- Optional field for additional notes
    color VARCHAR(20) NULL,                      -- Optional field for color or label
    recurring_type VARCHAR(20) NULL,             -- Optional field for recurrence type,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,  -- Foreign key for user association
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE -- Foreign key for creator association
);
