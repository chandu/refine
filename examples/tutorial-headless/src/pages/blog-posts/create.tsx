import React from "react";
import { useNavigation, useSelect } from "@refinedev/core";
import { useForm } from "@refinedev/react-hook-form";

export const BlogPostCreate = () => {
    const { list } = useNavigation();

    const {
        refineCore: { onFinish },
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { options: categoryOptions } = useSelect({
        resource: "categories",
    });

    return (
        <div style={{ padding: "16px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h1>Blog Post Create</h1>
                <div>
                    <button
                        onClick={() => {
                            list("blog_posts");
                        }}
                    >
                        Blog Posts List
                    </button>
                </div>
            </div>
            <form onSubmit={handleSubmit(onFinish)}>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                    }}
                >
                    <label>
                        <span style={{ marginRight: "8px" }}>Title</span>
                        <input
                            type="text"
                            {...register("title", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.title?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Content</span>
                        <textarea
                            rows={5}
                            cols={33}
                            style={{ verticalAlign: "top" }}
                            {...register("content", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.content?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Category</span>
                        <select
                            placeholder="Select category"
                            {...register("category.id", {
                                required: "This field is required",
                            })}
                        >
                            {categoryOptions?.map((option) => (
                                <option value={option.value} key={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        <span style={{ color: "red" }}>
                            {(errors as any)?.category?.id?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Status</span>
                        <input
                            type="text"
                            {...register("status", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.status?.message as string}
                        </span>
                    </label>
                    <label>
                        <span style={{ marginRight: "8px" }}>Created At</span>
                        <input
                            {...register("createdAt", {
                                required: "This field is required",
                            })}
                        />
                        <span style={{ color: "red" }}>
                            {(errors as any)?.createdAt?.message as string}
                        </span>
                    </label>
                    <div>
                        <input type="submit" value="Save" />
                    </div>
                </div>
            </form>
        </div>
    );
};
