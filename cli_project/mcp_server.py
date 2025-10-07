from pydantic import Field
from mcp.server.fastmcp import FastMCP

mcp = FastMCP("DocumentMCP", log_level="ERROR")


docs = {
    "deposition.md": "This deposition covers the testimony of Angela Smith, P.E.",
    "report.pdf": "The report details the state of a 20m condenser tower.",
    "financials.docx": "These financials outline the project's budget and expenditures.",
    "outlook.pdf": "This document presents the projected future performance of the system.",
    "plan.md": "The plan outlines the steps for the project's implementation.",
    "spec.txt": "These specifications define the technical requirements for the equipment.",
}


# Note: that claude uses descriptions to understand what the tool does
@mcp.tool(name="read_doc_contents", description="Reads a document in and prints it out")
def read_document(
    doc_id=Field(description="Id of the document name to read"),
) -> str:
    if doc_id not in docs:
        raise ValueError(f"doc with id {doc_id} not found")
    return docs[doc_id]


@mcp.tool(
    name="edit_document",
    description="Edit a document by replacing the subsection of the document with a new string",
)
def edit_document(
    doc_id=Field(description="Id of the document that will be edited"),
    old_str=Field(
        description="The string to be replaced. Must match exactly including whitespace."
    ),
    new_str=Field(description="The new string that will replace the old string."),
) -> None:
    if doc_id not in docs:
        raise ValueError(f"doc with id {doc_id} not found")
    docs[doc_id] = docs[doc_id].replace(old_str, new_str)


# TODO: Write a resource to return all doc id's
# TODO: Write a resource to return the contents of a particular doc
# TODO: Write a prompt to rewrite a doc in markdown format
# TODO: Write a prompt to summarize a doc


if __name__ == "__main__":
    mcp.run(transport="stdio")
